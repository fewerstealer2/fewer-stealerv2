echo off
::color 02

call npm i
call npm run electron-builder --win
::call npm start