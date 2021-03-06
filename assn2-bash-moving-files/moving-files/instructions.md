# Bash: Moving Files
An assignment designed to challenge students to manipulate files and folders on the command line.

## Setup
Before you begin, you will need to copy the folder ``/z/assignments/q4/moving-files/`` and all of its contents to somewhere on your W: drive. The path to your W: drive is ``/w/``.

1. Open the ``bash`` program (open Z: drive in the File Explorer and double click on ``bash``)
1. Use the ``cp`` command to copy the assignment folder to anywhere on your W: drive
  - Note: to copy the folder **and all its contents** you will need to use the ``-r`` option when you run ``cp``
  - Read the documentation for ``cp`` here: [Bash ``cp`` command](http://unloop.edu/bash/bash/cp.html)
1. Change directory (``cd``) into the new folder you just copied. Run ``pwd`` and ``ls`` to verify that you copied the folder correctly. 

## Requirements
The base requirements for this assignment are to complete the following list of tasks. Your completion of these tasks provides evidence of your success. You will create, delete, move and rename files and folders in several ways.

1. Change directory into the `challenge_files` directory.

2. Use the `cp` command to copy `index.html` to `index.html.bak` (Note: This is a common naming convention when you wish to back up a file.)

3. Use the `mkdir` command to make the directory `tmp/` inside of `challenge_files`.

4. Use the `cp` command to copy `index.html` to `tmp/keepme.html`.

5. Use the `rm` command to remove (or "delete") the file `deleteme.html`.

6. Use the `rmdir` command to remove (or "delete") the directory `delete_this_directory/`. 
  - Does it work? Or did you get an error?
  - Figure out how to remove `delete_this_directory/` and all the contents within. Refer to the bash documentation for the ``rm`` command: [Bash ``rm`` command](http://unloop.edu/bash/bash/rm.html)

7. Use the `curl` command to dowload an image and save it inside the `img/` directory.
  - The URL of the image is: ``http://unloop.edu/q1/images/dogs/dogs-068.jpg`` and you should save it as ``doggy.jpg``
  - Refer to the documentation for ``curl``: [Bash ``curl`` command](http://unloop.edu/bash/bash/curl.html)
  - You will need to redirect the output of the command with ``>``. Here is an example that uses ``curl`` to download an HTML page from the course website:

    ```
    curl http://unloop.edu/eloquentjs/00_intro.html > eloquentjs-intro.html
    ```

8. Use the `mv` (move) command to sort the `challenge_files/logs/` directory.
  * Use `mkdir` to create new directories to store the files.
  * Organize the new directories into year and month.
  * Use `mv` to move the log files into their appropriate directory.
  * Hint: Use wildcards to move several files at a time so the work goes much more quickly.

Once you have completed this work, you should zip the ``moving-files`` folder and submit it on Moodle.      