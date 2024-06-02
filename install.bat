@echo off



echo Running fx.bat...
cd fx
call fx.bat
cd ..

echo Running b.bat...
cd b
call b.bat
cd ..

echo All scripts have been executed.
pause
