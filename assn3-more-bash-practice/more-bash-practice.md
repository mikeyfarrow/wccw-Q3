# More Bash Practice

This assignment focuses on using the bash shell to execute common Unix commands.  You will create a file named ``more-bash-answers.txt`` that contains your answers to several questions below.

##Task 1: Obtain the files
There is a ZIP archive full of provided files that you must download to your W drive.

1. Use ``curl`` to download the file ``http://unloop.edu/17sp/q4/more-bash.zip`` and save it to your W: drive.

1. Unzip the ``more-bash.zip`` file's contents. Although you could unzip it using the File Explorer, it is much easier to use Bash:

	```
	unzip more-bash.zip
	```

If you did everything correctly, you should now have several files and directories inside the ``more-bash`` directory, such as ``java/``, ``website/``, ``animals.txt``, ``Starr.java``, ``numbers.txt``, and ``song1.txt``.

##Task 2: Bash shell commands

For each of the numbered items below, determine a single bash shell statement that will perform the operation(s) requested. Each of your solutions must be a single one-line shell statement.

Write these commands into a file called ``more-bash-answers.txt``. In your file, write the command that will perform the task described for each numbered item; **don't write the output that the command produces.**

You *could* use Sublime Text to create the ``more-bash-answers.txt`` file and copy/paste all of the commands you write. However you can accomplish the same thing with Bash without ever having to open Sublime Text or the file explorer. The ``history`` command will output all of the commands you have run so far. You can pipe the output of ``history`` into the ``tail`` command to get just the most recent command you wrote:

```
history | tail -n 1
```

From there, it is easy to append the last command you wrote to a text file:

```
history | tail -n 1 >> more-bash-answers.txt
```

1. List all files in the ``more-bash`` directory, in "long listing format".

2. List all files in the ``java`` directory, in reverse alphabetical order.

3. Copy the file ``numbers.txt`` into the ``java`` subdirectory.

4. Rename the file ``Starr.java`` to ``Ringo.java``. (Hint: Renaming is done using the same command as moving.)

5. Delete the files ``diff.html`` and ``diff.css``. Note that this must be done with a single command and not multiple commands.

7. Set the file ``MyProgram.java`` to have a last-modified date of March 15, 4:56pm. (Hint: check the documentation for the ``touch`` command).

1. List all web page files (files whose names end with the extension ``.html`` or ``.css``) in the current directory.

	>You can use a ``*`` (asterisk) as a "wild-card" character to specify a group of files.  For example, ``*foo`` means all files whose names end with foo, and  ``foo*`` means all files whose names begin with foo. You can use a wildcard in the middle of a file name, such as ``foo*baz`` for all files that start with foo and end with baz.

	>Note that the ``ls`` command can accept parameter(s) for what files you want it to list.

9. Copy all the text files (files whose names end with .txt) to the ``website`` subdirectory.

11. Display the contents of all files whose names begin with ``song`` and end with the extension ``.txt``, such as ``song1.txt`` and ``song2.txt``. (Write a single command that displays all their contents concatenated.)

12.	The ``head`` and ``tail`` commands output only the first or last few lines (respectively) of a file to the terminal.

	Display the last 5 lines of the file ``animals.txt`` on the terminal.

13. The ``wc`` command outputs how many bytes, words, lines, etc. a file occupies.

	Display the number of lines occupied by the file ``animals.txt``.
 