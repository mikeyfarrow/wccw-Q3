$(document).ready(function () {
	"use strict";

	var savedLogin = '';
	var savedPasswd = '';

	//
	// generic page functionality
	//
	var pageInfo = {};

	function setPageFunction(pageId, functionName, callback) {
		if (!pageInfo.hasOwnProperty(pageId)) {
			pageInfo[pageId] = {};
		}
		pageInfo[pageId][functionName] = callback;
	}

	function callPageFunction(jqSet, functionName, next) {
		jqSet.each(function (index) {
			var id = $(this).attr('id');
			var info = pageInfo[id];
			if (info !== undefined) {
				var toCall = info[functionName];
				if (toCall !== undefined) {
					toCall();
				}
			}
		});
		if (next) {
			next();
		}
	}

	function showPage(pageId) {
		// TODO: $('.page:visible')
		var toHide = $('.page').filter(function (index) {
			return $(this).css("display") === "block";
		});
		if (toHide.length > 0 && toHide.attr('id') == pageId) {
			return; // already showing
		}
		var toShow = $('#' + pageId);

		var afterHide = function () {
			callPageFunction(toShow, 'beforeShow', function () {
				toShow.fadeIn(100);
			});
		};

		if (toHide.length == 0) {
			afterHide();
		} else {
			callPageFunction(toHide, 'beforeHide', function () {
				toHide.fadeOut(100, afterHide);
			});
		}
	}

	function setLoggedIn(login, passwd) {
		savedLogin = login;
		savedPasswd = passwd;
		if (login !== null) {
			$('#header').show();
			showPage('page_tweets');
		} else {
			$('#header').hide();
			showPage('page_login');
		}
	}

	//
	// Login page
	//

	setPageFunction('page_login', 'beforeShow', function() {
		$('#login_err').text('');
	});

	setPageFunction('page_login', 'beforeHide', function() {
		$('#login_err').text('');
		$('#login_login').val('');
		$('#login_passwd').val('');
	});

	$('#form_login').submit(function (evnt) {
		evnt.preventDefault();
		var login = $('#login_login').val();
		var passwd = $('#login_passwd').val();
		$.ajax({ url: '/login', type: 'post',
			data: { login: login, passwd: passwd },
			error: function () {
				$('#login_err').text('Error sending login request');
			},
			success: function (jsonData) {
				if (jsonData.ok) {
					setLoggedIn(login, passwd);
				} else {
					$('#login_err').text(jsonData.message);
				}
			}
		});
	});

	$('#href_register').click(function (evnt) {
		evnt.preventDefault();
		showPage('page_register');
	});

	//
	// Register page
	//

	setPageFunction('page_register', 'beforeShow', function() {
		$('#register_err').text('');
	});

	setPageFunction('page_register', 'beforeHide', function() {
		$('#register_err').text('');
		$('#register_login').val('');
		$('#register_passwd').val('');
	});

	$('#form_register').submit(function (evnt) {
		evnt.preventDefault();
		var login = $('#register_login').val();
		var passwd = $('#register_passwd').val();
		$.ajax({ url: '/register', type: 'post',
			data: { login: login, passwd: passwd },
			error: function () {
				$('#register_err').text('Error sending register request');
			},
			success: function (jsonData) {
				if (jsonData.ok) {
					setLoggedIn(login, passwd);
				} else {
					$('#register_err').text(jsonData.message);
				}
			}
		});
	});

	$('#href_login').click(function (evnt) {
		evnt.preventDefault();
		showPage('page_login');
	});

	//
	// Main menu
	//
	$('#href_tweets').click(function (evnt) {
		evnt.preventDefault();
		showPage('page_tweets');
	});

	$('#href_feeds').click(function (evnt) {
		evnt.preventDefault();
		showPage('page_feeds');
	});

	$('#href_logout').click(function (evnt) {
		evnt.preventDefault();
		setLoggedIn(null, null);
	});

	//
	// Tweets page
	//
	
	function refreshTweets() {
		$.ajax({ url: '/fetch', type: 'post',
			data: { login: savedLogin, passwd: savedPasswd },
			error: function() {
				$('#tweets_list').empty();
				$('#tweets_err').text('Error retrieving tweets');
			},
			success: function (jsonData) {
				$('#tweets_list').empty();
				if (jsonData.ok) {
					$('#tweets_err').text('');
					if (jsonData.rows.length === 0) {
						$('#tweets_list').text('No tweets available.');
					} else {
						$.each(jsonData.rows, function (index, tweet) {
							var div = $('<div>').addClass('tweet');
							div.append($('<span>').addClass('tweet_feed')
								.text(tweet.user + ':'));
							div.append($('<span>').addClass('tweet_message')
								.text(tweet.message));
							$('#tweets_list').append(div);
						});
					}
				} else {
					$('#tweets_err').text(jsonData.message);
				}
			}
		});
	}

	setPageFunction('page_tweets', 'beforeShow', refreshTweets);

	$('#tweets_add').submit(function (evnt) {
		evnt.preventDefault();
		var text = $('#tweets_text').val();
		if (text === '') {
			$('#tweets_err').text('Cannot post empty message');
			return;
		}
		$.ajax({ url: '/add', type: 'post',
			data: { login: savedLogin, passwd: savedPasswd, message: text },
			error: function() {
				$('#tweets_err').text('Error posting tweet');
			},
			success: function (jsonData) {
				if (jsonData.ok) {
					$('#tweets_text').val('');
					refreshTweets();
				} else {
					$('#tweets_err').text(jsonData.message);
				}
			}
		});
	});

	$('#tweets_refresh').click(function (evnt) {
		evnt.preventDefault();
		refreshTweets();
	});

	//
	// Feeds page
	//
	
	function refreshFeeds() {
		$.ajax({ url: '/feeds', type: 'post',
			data: { login: savedLogin, passwd: savedPasswd },
			error: function() {
				$('#feeds_list').empty();
				$('#feeds_err').text('Error retrieving feeds');
			},
			success: function (jsonData) {
				$('#feeds_list').empty();
				if (jsonData.ok) {
					if (jsonData.rows.length === 0) {
						$('#feeds_err').text('No feeds available.');
					} else {
						$('#feeds_err').text('');
						$.each(jsonData.rows, function (index, feed) {
							var subStatus = $('<span class="feed_status">');
							if (feed.subscribed) {
								subStatus.addClass('feed_sub');
							} else {
								subStatus.addClass('feed_blank');
							}
							$('#feeds_list').append($('<tr class="feed">')
								.append($('<td>').append(subStatus))
								.append($('<td>').addClass('feed_name')
									.text(feed.login)));
						});
					}
				} else {
					$('#feeds_err').text(jsonData.message);
				}
			}
		});
	}

	setPageFunction('page_feeds', 'beforeShow', refreshFeeds);

	$('#feeds_refresh').click(function (evnt) {
		evnt.preventDefault();
		refreshFeeds();
	});

	$(document).on('click', '.feed td', function (evnt) {
		var tr = $(this).closest('tr');
		var subStatus = tr.find('.feed_status');
		var feed = tr.find('.feed_name').text();
		var sub = !subStatus.hasClass('feed_sub');

		$.ajax({ url: sub ? '/subscribe' : '/unsubscribe', type: 'post',
			data: { login: savedLogin, passwd: savedPasswd, feed: feed },
			error: function() {
				$('#feeds_err').text('Error while updating');
			},
			success: function (jsonData) {
				if (jsonData.ok) {
					$('#feeds_err').text('');
					if (sub) {
						subStatus.removeClass('feed_blank').addClass('feed_sub');
					} else {
						subStatus.removeClass('feed_sub').addClass('feed_blank');
					}
				} else {
					$('#feeds_err').text(jsonData.message);
				}
			}
		});
	});

	//
	// initial configuration
	//
	showPage('page_login');
});
