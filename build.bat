@echo off
chcp 65001 > nul
color 8

REM Store the current directory
set "CURRENT_DIR=%CD%"

cd "first crypter"
call crypter.bat

cd "..\2.crypter"
call second_crypter.bat

REM Return to the original directory
cd "%CURRENT_DIR%"

cd "main"
call install.bat
