# Nintendo Switch Discord Status
A moderately okay solution to display what you're playing on Nintendo Switch using Rich Presence on Discord. Thanks to [Da532](https://github.com/Da532), [Nora](https://github.com/UnicorNora), and [karei](https://github.com/kareigu) for making huge contributions to this project. ✌️

## Introduction
"Nintendo Switch Discord Status" is a somewhat competent fork of ['NS-RPC' (Nintendo Nintendo Switch Discord Status)](https://github.com/Da532/NS-RPC), an Electron app for Windows, Linux, and macOS that allows Switch users to display
the game they're currently playing as their Discord status with Rich Presence.


![Nintendo Switch Discord Status Screenshot](https://i.imgur.com/khhKXvY.png)

### With Nintendo Switch Discord Status you can...
* Show off to non-Switch owners that you are a Nintendo Switch owner across all of Discord.
* Select from a currently-limited-by-discord list of games to show off.
* Set a custom status message to let everyone know exactly what you're doing in-game.
* Experience my absolutely disgusting attempt at re-designing a user interface.

### Missing a game?
Open an issue on this page and I'll add it as quickly as I can. Thanks to [karei](https://github.com/kareigu) for the ability to type in custom games that use the default 'Home' image. 

### Problems:
I have been noticing that new releases of the application seem to require a restart of the Discord application, I am not sure why this started happening, but if you notice that art assets aren't loading, try restarting both applications.

As of right now, I do not know of a way to have more than 300 art assets stored by Discord in order to display artwork for all of the games that are available on the Nintendo Switch. I have not added 300 games to the list yet, but I will attempt to find a way around this limitation in the meantime. The temporary solution is to keep the list updated with the 300 most popular/recent games.

Alternatively, the 300 game limit can be exceeded by using generic artwork for any game outside of the 300. The rich presence would then display the title and status of the game, just without the custom game artwork. I can foresee using the generic 'Home' artwork in this case.

If you'd like to leave any suggestions or ideas about this problem, please open an issue on this repo.

I am also attempting to correct the UI errors.

## Prerequisites
All you need is a high tolerance for bad UI and the [Discord App](https://discordapp.com) installed to the same machine.

## Installation
If you're looking for convenience, you'll find already built copies of Nintendo Switch Discord Status for
Linux, macOS, and Windows [here](https://github.com/hobby-grade/Nintendo-Switch-Discord-Status/releases). You will need to install the Windows version of the application, and optionally the macOS version of the application. With both of these OSes you will encounter SmartScreen / Gatekeeper. You will need to allow the application through these obstacles to use it.

## Building From source
Building from source is also possible if you don't value your time.

Required packages: [Node.js](https://nodejs.org/).

1. Once Node.js is installed, git clone or download and extract the source files to your chosen directory.
2. Open a terminal window in that directory.
3. To install the application's required dependencies, use the command `npm install`.
4. Finally, to execute the application you simply need to enter into terminal `npm start`.

## Need Help?
Open an issue on this page and I'll get back to you as soon as possible!

## Donations
If for some reason you'd like to donate, you can use the wallet addresses below:  
BTC: 37BgqEvSXY47ZnT3g4xDTyeLGUjVffDbkt  
LTC: LY29oyRb5S9Z5XfzXoWj94iQDrDBXswAtV  
BAT: 0x394bb3A0eE014ae46988Ebc8B6e26F509E20A0fD  