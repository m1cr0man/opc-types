/// <reference types="lua-types/5.1" />
/// <reference types="typescript-to-lua/language-extensions" />
type Color = number;
type Table = { [K in string | number]: any };
/** @vararg */
interface LuaVarArgs<T> extends Array<T> { }
/**
 * Sleeps for a number of seconds
 *
 * @param time - The number of seconds to sleep
*/
declare function sleep(time: number): undefined;
/**
 * Bit manipulation API
 *
 * @noSelf
 * @noResolution
*/
declare module "bit" {
    /**
     * Shifts bits left.
     *
     * @param n - Number to shift
     * @param bits - Number of bits to shift by
    */
    export function blshift(n: number, bits: number): number;
    /**
     * Shifts bits right arithmetically.
     *
     * @param n - Number to shift
     * @param bits - Number of bits to shift by
    */
    export function brshift(n: number, bits: number): number;
    /**
     * Shifts bits right logically.
     *
     * @param n - Number to shift
     * @param bits - Number of bits to shift by
    */
    export function blogic_rshift(n: number, bits: number): number;
    /**
     * Performs an exclusive OR on two numbers.
     *
     * @param n - First number
     * @param m - Second number
    */
    export function bxor(n: number, m: number): number;
    /**
     * Performs an OR on two numbers.
     *
     * @param n - First number
     * @param m - Second number
    */
    export function bor(n: number, m: number): number;
    /**
     * Performs an AND on two numbers.
     *
     * @param n - First number
     * @param m - Second number
    */
    export function band(n: number, m: number): number;
    /**
     * Performs a NOT on a number.
     *
     * @param n - A number
    */
    export function bnot(n: number): number;
}
/**
 * Provides constants for colors.
 *
 * @noSelf
 * @noResolution
*/
declare module "colors" {
    /**
     * Combines one or more colors (or sets of colors) into a larger set.
     *
     * @param color1 - First color
     * @param color2 - Second color
     * @param ...args - Other colors
    */
    export function combine(color1: Color, color2: Color, ...args: LuaVarArgs<Color>): Color;
    /**
     * Removes one or more colors (or sets of colors) from an initial set.
     *
     * @param colors - Combined color
     * @param color1 - First color
     * @param ...args - Other colors
    */
    export function subtract(colors: Color, color1: Color, ...args: LuaVarArgs<Color>): Color;
    /**
     * Tests whether color is contained within colors.
     *
     * @param colors - A set of colors
     * @param color - The color to test for
    */
    export function test(colors: Color, color: Color): boolean;
    /**
     * Combines a three-color RGB value into one hexadecimal representation. (CC:T)
     *
     * @param r - The red value, from 0.0 to 1.0.
     * @param g - The green value, from 0.0 to 1.0.
     * @param b - The blue value, from 0.0 to 1.0.
    */
    export function packRGB(r: number, g: number, b: number): number;
    /**
     * Separates a hexadecimal RGB color into its three constituent channels. (CC:T)
     *
     * @param rgb - The RGB hex value to unpack.
    */
    export function unpackRGB(rgb: number): MultiReturn<[number, number, number]>;
    /**
     * Converts the given color to a paint/blit hex character (0-9, a-f). (CC:T 1.94+)
     *
     * @param color - The color to convert.
    */
    export function toBlit(color: Color): string;
    /**
     * White
    */
    const white = 1;
    /**
     * Orange
    */
    const orange = 2;
    /**
     * Magenta
    */
    const magenta = 4;
    /**
     * Light blue
    */
    const lightBlue = 8;
    /**
     * Yellow
    */
    const yellow = 16;
    /**
     * Lime
    */
    const lime = 32;
    /**
     * Pink
    */
    const pink = 64;
    /**
     * Gray
    */
    const gray = 128;
    /**
     * Light gray
    */
    const lightGray = 256;
    /**
     * Cyan
    */
    const cyan = 512;
    /**
     * Purple
    */
    const purple = 1024;
    /**
     * Blue
    */
    const blue = 2048;
    /**
     * Brown
    */
    const brown = 4096;
    /**
     * Green
    */
    const green = 8192;
    /**
     * Red
    */
    const red = 16384;
    /**
     * Black
    */
    const black = 32768;
}
/**
 * Provides constants for colours (UK)
 *
 * @noSelf
 * @noResolution
*/
declare module "colours" {
    /**
     * Combines one or more colours (or sets of colours) into a larger set.
     *
     * @param colour1 - First colour
     * @param colour2 - Second colour
     * @param ...args - Other colours
    */
    export function combine(colour1: Color, colour2: Color, ...args: LuaVarArgs<Color>): Color;
    /**
     * Removes one or more colours (or sets of colours) from an initial set.
     *
     * @param colours - Combined colour
     * @param colour1 - First colour
     * @param ...args - Other colours
    */
    export function subtract(colours: Color, colour1: Color, ...args: LuaVarArgs<Color>): Color;
    /**
     * Tests whether colour is contained within colours.
     *
     * @param colours - A set of colours
     * @param colour - The colour to test for
    */
    export function test(colours: Color, colour: Color): boolean;
    /**
     * Combines a three-colour RGB value into one hexadecimal representation. (CC:T)
     *
     * @param r - The red value, from 0.0 to 1.0.
     * @param g - The green value, from 0.0 to 1.0.
     * @param b - The blue value, from 0.0 to 1.0.
    */
    export function packRGB(r: number, g: number, b: number): number;
    /**
     * Separates a hexadecimal RGB colour into its three constituent channels. (CC:T)
     *
     * @param rgb - The RGB hex value to unpack.
    */
    export function unpackRGB(rgb: number): MultiReturn<[number, number, number]>;
    /**
     * Converts the given colour to a paint/blit hex character (0-9, a-f). (CC:T 1.94+)
     *
     * @param colour - The colour to convert.
    */
    export function toBlit(colour: Color): string;
    /**
     * White
    */
    const white = 1;
    /**
     * Orange
    */
    const orange = 2;
    /**
     * Magenta
    */
    const magenta = 4;
    /**
     * Light blue
    */
    const lightBlue = 8;
    /**
     * Yellow
    */
    const yellow = 16;
    /**
     * Lime
    */
    const lime = 32;
    /**
     * Pink
    */
    const pink = 64;
    /**
     * Grey
    */
    const grey = 128;
    /**
     * Light grey
    */
    const lightGrey = 256;
    /**
     * Cyan
    */
    const cyan = 512;
    /**
     * Purple
    */
    const purple = 1024;
    /**
     * Blue
    */
    const blue = 2048;
    /**
     * Brown
    */
    const brown = 4096;
    /**
     * Green
    */
    const green = 8192;
    /**
     * Red
    */
    const red = 16384;
    /**
     * Black
    */
    const black = 32768;
}
/**
 * Command computers only: allows executing Minecraft commands. (1.7+)
 *
 * @noSelf
 * @noResolution
*/
declare module "commands" {
    /**
     * Executes a command string synchronously.
     *
     * @param command - The command string to run
    */
    export function exec(command: string): MultiReturn<[boolean, Table]>;
    /**
     * Executes a command string asynchronously.
     *
     * @param command - The command string to run
    */
    export function execAsync(command: string): number;
    /**
     * Returns a list of commands.
     *
    */
    export function list(): Table;
    /**
     * Returns the world position of the computer.
     *
    */
    export function getBlockPosition(): MultiReturn<[number, number, number]>;
    /**
     * Returns information about the block at a position.
     *
     * @param x - X coordinate
     * @param y - Y coordinate
     * @param z - Z coordinate
    */
    export function getBlockInfo(x: number, y: number, z: number): Table;
    /**
     * Returns information about blocks between two positions.
     *
     * @param x1 - First X coordinate
     * @param y1 - First Y coordinate
     * @param z1 - First Z coordinate
     * @param x2 - Second X coordinate
     * @param y2 - Second Y coordinate
     * @param z2 - Second Z coordinate
    */
    export function getBlockInfos(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): Table;
}
/**
 * Allows accessing data about disk drives.
 *
 * @noSelf
 * @noResolution
*/
declare module "disk" {
    /**
     * Returns whether an item is in the drive.
     *
     * @param side - The side to check
    */
    export function isPresent(side: string): boolean;
    /**
     * Returns whether a floppy disk is in the drive.
     *
     * @param side - The side to check
    */
    export function hasData(side: string): boolean;
    /**
     * Returns the mount point of the disk.
     *
     * @param side - The side to check
    */
    export function getMountPath(side: string): string | undefined;
    /**
     * Sets the label of a disk.
     *
     * @param side - The side to check
     * @param label - The name of the disk
    */
    export function setLabel(side: string, label: string): undefined;
    /**
     * Returns the label of a floppy disk.
     *
     * @param side - The side to check
    */
    export function getLabel(side: string): string | undefined;
    /**
     * Returns the ID of a disk.
     *
     * @param side - The side to check
    */
    export function getID(side: string): number | undefined;
    /**
     * Returns whether a music disc is in the drive.
     *
     * @param side - The side to check
    */
    export function hasAudio(side: string): boolean;
    /**
     * Returns the name of the music disc inserted.
     *
     * @param side - The side to check
    */
    export function getAudioTitle(side: string): string | undefined;
    /**
     * Plays the music disc in the drive.
     *
     * @param side - The side to check
    */
    export function playAudio(side: string): undefined;
    /**
     * Stops the music disc in the drive.
     *
     * @param side - The side to check
    */
    export function stopAudio(side: string): undefined;
    /**
     * Ejects the object from the drive.
     *
     * @param side - The side to check
    */
    export function eject(side: string): undefined;
}
/**
 * Allows performing operations on files and directories.
 *
 * @noSelf
 * @noResolution
*/
declare module "fs" {
    /**
     * Returns a list of files and folders in a directory.
     *
     * @param path - The path to query
    */
    export function list(path: string): Table;
    /**
     * Checks whether the path exists.
     *
     * @param path - The path to query
    */
    export function exists(path: string): boolean;
    /**
     * Checks whether the path is a directory.
     *
     * @param path - The path to query
    */
    export function isDir(path: string): boolean;
    /**
     * Checks whether the path is read only.
     *
     * @param path - The path to query
    */
    export function isReadOnly(path: string): boolean;
    /**
     * Returns the basename of the path.
     *
     * @param path - The path to query
    */
    export function getName(path: string): string;
    /**
     * Returns the storage medium holding a path.
     *
     * @param path - The path to query
    */
    export function getDrive(path: string): string | undefined;
    /**
     * Returns the size of a file in bytes.
     *
     * @param path - The path to query
    */
    export function getSize(path: string): number;
    /**
     * Returns the space available in the directory.
     *
     * @param path - The path to query
    */
    export function getFreeSpace(path: string): number;
    /**
     * Creates a directory at the path, creating parents as needed.
     *
     * @param path - The path to create
    */
    export function makeDir(path: string): undefined;
    /**
     * Moves a file or directory to a new location.
     *
     * @param fromPath - The source path
     * @param toPath - The destination path
    */
    export function move(fromPath: string, toPath: string): undefined;
    /**
     * Copies a file or directory to a new location.
     *
     * @param fromPath - The source path
     * @param toPath - The destination path
    */
    export function copy(fromPath: string, toPath: string): undefined;
    /**
     * Combines two path components, so that the second path is nested inside the first.
     *
     * @param basePath - The base path
     * @param localPath - The local path
    */
    export function combine(basePath: string, localPath: string): string;
    /**
     * Opens a file for reading or writing.
     *
     * @param path - The file to open
     * @param mode - The mode to open the file in (r/w/a[b])
    */
    export function open(path: string, mode: string): Table;
    /**
     * Searches the filesystem for files matching a pattern, and returns a list of results. (1.6+)
     *
     * @param wildcard - The pattern to match against
    */
    export function find(wildcard: string): Table;
    /**
     * Returns the parent directory of a path. (1.63+)
     *
     * @param path - The path to query
    */
    export function getDir(path: string): string;
    /**
     * Returns a list of possible completions for a directory and a partial name. (1.74+)
     *
     * @param partialName - The first part of a filename
     * @param path - The path to complete from
     * @param includeFiles - Whether to include files (optional)
     * @param includeSlashes - Whether to include slashes (optional)
    */
    export function complete(partialName: string, path: string, includeFiles?: boolean, includeSlashes?: boolean): Table;
    /**
     * Returns true if a path is mounted to the parent filesystem. (CC:T 1.88+)
     *
     * @param path - The path to check
    */
    export function isDriveRoot(path: string): boolean;
    /**
     * Returns the amount of free space (in bytes) available on the drive the path is located on. (CC:T 1.87+)
     *
     * @param path - The path to get the capacity of
    */
    export function getCapacity(path: string): number;
    /**
     * Gets attributes about a specific file or folder. (CC:T 1.87+)
     *
     * @param path - The path to get attributes for
    */
    export function attributes(path: string): Table;
}
/**
 * Allows locating the position of a computer or turtle via trilateration over rednet.
 *
 * @noSelf
 * @noResolution
*/
declare module "gps" {
    /**
     * Locates the current computer or turtle if possible.
     *
     * @param timeout - The maximim amount of time to wait for a response, defaults to 2
     * @param debug - Whether to print debug messages (optional)
    */
    export function locate(timeout?: number, debug?: boolean): (MultiReturn<[number, number, number]>) | undefined;
}
/**
 * Provides functions for viewing help documents.
 *
 * @noSelf
 * @noResolution
*/
declare module "help" {
    /**
     * Returns a string listing the directories to search for help topics in, separated by colons.
     *
    */
    export function path(): string;
    /**
     * Sets the paths to search for help topics.
     *
     * @param path - The paths to search for help topics, separated by colons
    */
    export function setPath(path: string): undefined;
    /**
     * Returns the path to the file containing a help topic.
     *
     * @param topic - The topic to search for
    */
    export function lookup(topic: string): string | undefined;
    /**
     * Returns a list of help topics available.
     *
    */
    export function topics(): Table;
    /**
     * Returns a list of suffixes that can be appended to the prefix to create a topic name. (1.74+)
     *
     * @param topicPrefix - The beginning of a topic name
    */
    export function completeTopic(topicPrefix: string): Table;
}
/**
 * Allows accessing the internet through HTTP requests.
 *
 * @noSelf
 * @noResolution
*/
declare module "http" {
    /**
     * Asynchronously sends an HTTP request.
     *
     * @param url - The URL to send the request to
     * @param postData - Any data to send in a POST request, set to nil to send a GET request (optional)
     * @param headers - The headers to set in the request (optional)
     * @param binary - Whether to send a binary request (optional) (CC 1.8+)
     * @param redirect - Whether to automatically redirect on HTTP 300 responses (optional) (CC 1.8+)
    */
    export function request(url: string, postData?: string, headers?: Table, binary?: boolean, redirect?: boolean): undefined;
    /**
     * Synchronously sends an HTTP GET request, and returns a file handle.
     *
     * @param url - The URL to send the request to
     * @param headers - The headers to set in the request (optional)
     * @param binary - Whether to send a binary request (optional) (CC 1.8+)
     * @param redirect - Whether to automatically redirect on HTTP 300 responses (optional) (CC 1.8+)
    */
    export function get(url: string, headers?: Table, binary?: boolean, redirect?: boolean): Table | MultiReturn<[undefined, string, Table | undefined]>;
    /**
     * Synchronously sends an HTTP POST request, and returns a file handle.
     *
     * @param url - The URL to send the request to
     * @param postData - The data to send
     * @param headers - The headers to set in the request (optional)
     * @param binary - Whether to send a binary request (optional) (CC 1.8+)
     * @param redirect - Whether to automatically redirect on HTTP 300 responses (optional) (CC 1.8+)
    */
    export function post(url: string, postData: string, headers?: Table, binary?: boolean, redirect?: boolean): Table | MultiReturn<[undefined, string, Table | undefined]>;
    /**
     * Checks if a URL is valid and in the whitelist.
     *
     * @param url - The URL to check
    */
    export function checkURL(url: string): MultiReturn<[boolean, string | undefined]>;
    /**
     * Asynchronously hecks if a URL is valid and in the whitelist.
     *
     * @param url - The URL to check
    */
    export function checkURLAsync(url: string): undefined;
    /**
     * Opens a websocket. (CC:T)
     *
     * @param url - The URL to connect to
     * @param headers - Any headers to send in the HTTP request
    */
    export function websocket(url: string, headers?: Table): Table | MultiReturn<[undefined, string]>;
    /**
     * Asynchronously opens a websocket. (CC:T)
     *
     * @param url - The URL to connect to
     * @param headers - Any headers to send in the HTTP request
    */
    export function websocketAsync(url: string, headers?: Table): undefined;
}
/**
 * Default Lua IO API
 *
 * @noSelf
 * @noResolution
*/
declare module "io" {
    /**
     * Closes a file handle.
     *
     * @param file - The file to operate on (nil for default output file)
    */
    export function close(file?: Table): undefined;
    /**
     * Flushes the current output file.
     *
    */
    export function flush(): undefined;
    /**
     * Either opens a filename and sets the default input file handle, sets the defualt input handle to the handle passed in, or returns the current input handle.
     *
     * @param file - The file name or file handle to operate on, or nil to return the input file
    */
    export function input(file?: string | Table): Table | undefined;
    /**
     * Returns an iterator function that returns each line in a file.
     *
     * @param filename - The filename to open, or nil for the default input file
    */
    export function lines(filename?: string): ((...args: any[]) => any);
    /**
     * Opens a file for reading or writing.
     *
     * @param filename - The file to open
     * @param mode - The mode to open the file in (r/w/a) (optional)
    */
    export function open(filename: string, mode?: string): Table | (MultiReturn<[undefined, string]>);
    /**
     * Either opens a filename and sets the default output file handle, sets the defualt output handle to the handle passed in, or returns the current output handle.
     *
     * @param file - The file name or file handle to operate on, or nil to return the output file
    */
    export function output(file?: string | Table): Table | undefined;
    /**
     * Reads the next line from the input file.
     *
     * @param ...args - *l for each line that will be read
    */
    export function read(...args: LuaVarArgs<string>): string | undefined[];
    /**
     * Returns "file" if obj is an open file, "closed file" if obj is a closed file, or nil.
     *
     * @param obj - The object to check
    */
    export function type(obj: any): string | undefined;
    /**
     * Writes a string or number to the default output.
     *
     * @param str - The string or number to write
    */
    export function write(str: string | number): undefined;
}
/**
 * Allows running multiple terminal sessions at once. (1.6+) (Advanced only)
 *
 * @noSelf
 * @noResolution
*/
declare module "multishell" {
    /**
     * Returns the current tab ID.
     *
    */
    export function getCurrent(): number;
    /**
     * Returns the number of tabs open.
     *
    */
    export function getCount(): number;
    /**
     * Starts a program in a new tab.
     *
     * @param environment - The environment of the new task
     * @param programPath - The path to the program to run
     * @param arguments - Any arguments to pass to the program
    */
    export function launch(environment: Table, programPath: string, arguments?: string): number;
    /**
     * Sets the tab as the current tab.
     *
     * @param tabID - The ID of the tab
    */
    export function setFocus(tabID: number): boolean;
    /**
     * Sets the title of the tab.
     *
     * @param tabID - The ID of the tab
     * @param title - The new name of the tab
    */
    export function setTitle(tabID: number, title: string): undefined;
    /**
     * Returns the title of a tab.
     *
     * @param tabID - The ID of the tab
    */
    export function getTitle(tabID: number): string;
    /**
     * Returns the ID of the current tab.
     *
    */
    export function getFocus(): number;
}
/**
 * Interfaces with CraftOS and the computer.
 *
 * @noSelf
 * @noResolution
*/
declare module "os" {
    /**
     * Returns the version of CraftOS running on the computer.
     *
    */
    export function version(): string;
    /**
     * Returns the ID of the current computer.
     *
    */
    export function getComputerID(): number;
    /**
     * Returns the label of the computer.
     *
    */
    export function getComputerLabel(): string | undefined;
    /**
     * Sets the label of the computer.
     *
     * @param label - The new label or nil
    */
    export function setComputerLabel(label: string | undefined): undefined;
    /**
     * Runs a Lua script with the specified environment.
     *
     * @param environment - The environment to pass to the program
     * @param programPath - The path to the program to run
     * @param arguments - Any arguments to pass to the program
    */
    export function run(environment: Table, programPath: string, arguments?: string): boolean;
    /**
     * Loads an API into the global table. (Deprecated)
     *
     * @param path - The path to the API to load
    */
    export function loadAPI(path: string): boolean;
    /**
     * Unloads a previously loaded API. (Deprecated)
     *
     * @param name - The name of the API
    */
    export function unloadAPI(name: string): undefined;
    /**
     * Waits for an event to occur.
     *
     * @param targetEvent - A filter specifying which event to wait for (optional)
    */
    export function pullEvent(targetEvent?: string): MultiReturn<[string, any]>[];
    /**
     * Waits for an event to occur (doesn't terminate when Ctrl-T is pressed).
     *
     * @param targetEvent - A filter specifying which event to wait for (optional)
    */
    export function pullEventRaw(targetEvent?: string): MultiReturn<[string, any]>[];
    /**
     * Adds an event to the event queue.
     *
     * @param event - The event to queue
     * @param ...args - Any parameters to pass in the event
    */
    export function queueEvent(event: string, ...args: LuaVarArgs<any>): undefined;
    /**
     * Returns the amount of time since the computer was started.
     *
    */
    export function clock(): number;
    /**
     * Queues an event after an amount of seconds has passed, and returns the ID.
     *
     * @param timeout - The number of seconds to wait
    */
    export function startTimer(timeout: number): number;
    /**
     * Cancels a previously started timer.
     *
     * @param timerID - The ID of the timer
    */
    export function cancelTimer(timerID: number): undefined;
    /**
     * Returns the current time in the selected locale.
     *
     * @param locale - One of 'ingame', 'utc', or 'local'. Defaults to 'ingame'. (1.8+)
    */
    export function time(locale?: string): number;
    /**
     * Returns a string or table with the current or provided time representation. (CC:T)
     *
     * @param format - The format for the date string. If set to '*t', returns a table instead.
     * @param time - The time to convert. Defaults to the current local time, or current UTC time if the format is prefixed with '!'.
    */
    export function date(format?: string, time?: number): string | Table;
    /**
     * Sleeps for a number of seconds.
     *
     * @param time - The number of seconds to sleep
    */
    export function sleep(time: number): undefined;
    /**
     * Returns the current day for the selected locale.
     *
     * @param locale - One of 'ingame', 'utc', or 'local'. Defaults to 'ingame'. (1.8+)
    */
    export function day(locale?: string): number;
    /**
     * Returns the time in seconds since an epoch depending on the locale.
     *
     * @param locale - One of 'ingame', 'utc', or 'local'. Defaults to 'ingame'. (1.8+)
    */
    export function epoch(locale?: string): number;
    /**
     * Sets an alarm to activate at an in-game time, and returns the ID.
     *
     * @param time - The time to activate at
    */
    export function setAlarm(time: number): number;
    /**
     * Cancels a previously started alarm.
     *
     * @param alarmID - The ID of the alarm
    */
    export function cancelAlarm(alarmID: number): undefined;
    /**
     * Powers off the computer.
     *
    */
    export function shutdown(): undefined;
    /**
     * Reboots the computer.
     *
    */
    export function reboot(): undefined;
}
/**
 * Allows drawing on the screen.
 *
 * @noSelf
 * @noResolution
*/
declare module "paintutils" {
    /**
     * Loads and returns an image from a file.
     *
     * @param path - The path to the file to load
    */
    export function loadImage(path: string): Table;
    /**
     * Draws an image on the screen.
     *
     * @param image - The image to draw
     * @param x - The X coordinate
     * @param y - The Y coordinate
    */
    export function drawImage(image: Table, x: number, y: number): undefined;
    /**
     * Draws a pixel on the screen.
     *
     * @param x - The X coordinate
     * @param y - The Y coordinate
     * @param color - The color to paint with
    */
    export function drawPixel(x: number, y: number, color?: Color): undefined;
    /**
     * Draws a line on the screen.
     *
     * @param startX - The first X coordinate
     * @param startY - The first Y coordinate
     * @param endX - The second X coordinate
     * @param endY - The second Y coordinate
     * @param color - The color to paint with
    */
    export function drawLine(startX: number, startY: number, endX: number, endY: number, color?: Color): undefined;
    /**
     * Draws a box on the screen. (1.64+)
     *
     * @param startX - The first X coordinate
     * @param startY - The first Y coordinate
     * @param endX - The second X coordinate
     * @param endY - The second Y coordinate
     * @param color - The color to paint with
    */
    export function drawBox(startX: number, startY: number, endX: number, endY: number, color?: Color): undefined;
    /**
     * Draws a filled box on the screen. (1.64+)
     *
     * @param startX - The first X coordinate
     * @param startY - The first Y coordinate
     * @param endX - The second X coordinate
     * @param endY - The second Y coordinate
     * @param color - The color to paint with
    */
    export function drawFilledBox(startX: number, startY: number, endX: number, endY: number, color?: Color): undefined;
}
/**
 * Allows easier multitasking
 *
 * @noSelf
 * @noResolution
*/
declare module "parallel" {
    /**
     * Runs the functions all at once and waits for one to return.
     *
     * @param func1 - The first function
     * @param func2 - The second function
     * @param ...args - Any other functions
    */
    export function waitForAny(func1: ((...args: any[]) => any), func2: ((...args: any[]) => any), ...args: LuaVarArgs<((...args: any[]) => any)>): number;
    /**
     * Runs the functions all at once and waits for all to return.
     *
     * @param func1 - The first function
     * @param func2 - The second function
     * @param ...args - Any other functions
    */
    export function waitForAll(func1: ((...args: any[]) => any), func2: ((...args: any[]) => any), ...args: LuaVarArgs<((...args: any[]) => any)>): undefined;
}
/**
 * Interacts with peripherals.
 *
 * @noSelf
 * @noResolution
*/
declare module "peripheral" {
    /**
     * Checks if a peripheral is present on a side.
     *
     * @param side - The side to check
    */
    export function isPresent(side: string): boolean;
    /**
     * Returns the type of peripheral on a side.
     *
     * @param side - The side or wrapped peripheral to check
    */
    export function getType(side: string | Table): string | undefined;
    /**
     * Returns a list of methods that the peripheral has.
     *
     * @param side - The side to check
    */
    export function getMethods(side: string): Table | undefined;
    /**
     * Returns the side a wrapped peripheral is on. (CC:1 1.88+)
     *
     * @param peripheral - The peripheral to check
    */
    export function getName(peripheral: Table): string | undefined;
    /**
     * Calls a method on a peripheral.
     *
     * @param side - The side to check
     * @param method - The method to call
     * @param ...args - Any arguments to pass to the method
    */
    export function call(side: string, method: string, ...args: LuaVarArgs<any>): any;
    /**
     * Returns a table containing all of the methods of a peripheral.
     *
     * @param side - The side to check
    */
    export function wrap(side: string): Table | undefined;
    /**
     * Finds peripherals of a type and returns their tables of methods. (1.6+)
     *
     * @param type - The type of peripheral to find
     * @param fnFilter - A function that filters through the entries
    */
    export function find(type: string, fnFilter?: ((...args: any[]) => any)): Table | undefined;
    /**
     * Returns a list of names of connected peripherals.
     *
    */
    export function getNames(): Table;
}
/**
 * Controls transferring data over modems.
 *
 * @noSelf
 * @noResolution
*/
declare module "rednet" {
    /**
     * Opens a side for transcieving.
     *
     * @param side - The side to open
    */
    export function open(side: string): undefined;
    /**
     * Closes a side for transcieving.
     *
     * @param side - The side to close
    */
    export function close(side: string): undefined;
    /**
     * Sends a message to a computer.
     *
     * @param recieverID - The ID of the computer to recieve the message
     * @param message - The message to send
     * @param protocol - The protocol to use (1.6+)
    */
    export function send(recieverID: string, message: any, protocol?: string): undefined;
    /**
     * Sends a message to all computers.
     *
     * @param message - The message to send
     * @param protocol - The protocol to use (1.6+)
    */
    export function broadcast(message: any, protocol?: string): undefined;
    /**
     * Waits for a message to be received, then returns the received message.
     *
     * @param protocolFilter - The protocol to search for, requires timeout to be specified after
     * @param timeout - The maximim amount of time to wait for a message, defaults to 2
    */
    export function receive(protocolFilter?: string, timeout?: number): MultiReturn<[number, any, number]> | string;
    /**
     * Checks if a modem is open.
     *
     * @param side - The side to check
    */
    export function isOpen(side: string): boolean;
    /**
     * Adds a hostname for a protocol for rednet.lookup(). (1.6+)
     *
     * @param protocol - The protocol to use
     * @param hostname - The hostname to use
    */
    export function host(protocol: string, hostname: string): undefined;
    /**
     * Removes a hostname for a protocol for rednet.lookup(). (1.6+)
     *
     * @param protocol - The protocol to use
     * @param hostname - The hostname to use
    */
    export function unhost(protocol: string, hostname: string): undefined;
    /**
     * Searches for a hostname or a protocol. (1.6+)
     *
     * @param protocol - The protocol to use
     * @param hostname - The hostname to use (optional)
    */
    export function lookup(protocol: string, hostname?: string): undefined;
}
/**
 * Controls redstone inputs and outputs.
 *
 * @noSelf
 * @noResolution
*/
declare module "redstone" {
    /**
     * Returns the sides available for redstone.
     *
    */
    export function getSides(): Table;
    /**
     * Returns the digital value of the redstone on a side.
     *
     * @param side - The side to check
    */
    export function getInput(side: string): boolean;
    /**
     * Sets the digital value of the redstone output on a side.
     *
     * @param side - The side to check
     * @param value - The value to set
    */
    export function setOutput(side: string, value: boolean): undefined;
    /**
     * Returns the digital value of the redstone that's being output on a side.
     *
     * @param side - The side to check
    */
    export function getOutput(side: string): boolean;
    /**
     * Returns the analog value of the redstone on a side. (1.51+)
     *
     * @param side - The side to check
    */
    export function getAnalogInput(side: string): number;
    /**
     * Sets the analog value of the redstone output on a side. (1.51+)
     *
     * @param side - The side to check
     * @param value - The value to set
    */
    export function setAnalogOutput(side: string, value: number): undefined;
    /**
     * Returns the analog value of the redstone that's being output on a side. (1.51+)
     *
     * @param side - The side to check
    */
    export function getAnalogOutput(side: string): number;
    /**
     * Returns the value of the bundled redstone on a side.
     *
     * @param side - The side to check
    */
    export function getBundledInput(side: string): number;
    /**
     * Sets the value of the bundled redstone output on a side.
     *
     * @param side - The side to check
     * @param colors - The value to set as a bitmask of colors
    */
    export function setBundledOutput(side: string, colors: number): undefined;
    /**
     * Returns the value of the bundled redstone that's being output on a side.
     *
     * @param side - The side to check
    */
    export function getBundledOutput(side: string): number;
    /**
     * Checks if a color is active in a bundled redstone wire.
     *
     * @param side - The side to check
     * @param color - The value to set as a bitmask
    */
    export function testBundledOutput(side: string, color: Color): boolean;
}
/**
 * Controls redstone inputs and outputs.
 *
 * @noSelf
 * @noResolution
*/
declare module "rs" {
    /**
     * Returns the sides available for redstone.
     *
    */
    export function getSides(): Table;
    /**
     * Returns the digital value of the redstone on a side.
     *
     * @param side - The side to check
    */
    export function getInput(side: string): boolean;
    /**
     * Sets the digital value of the redstone output on a side.
     *
     * @param side - The side to check
     * @param value - The value to set
    */
    export function setOutput(side: string, value: boolean): undefined;
    /**
     * Returns the digital value of the redstone that's being output on a side.
     *
     * @param side - The side to check
    */
    export function getOutput(side: string): boolean;
    /**
     * Returns the analog value of the redstone on a side. (1.51+)
     *
     * @param side - The side to check
    */
    export function getAnalogInput(side: string): number;
    /**
     * Sets the analog value of the redstone output on a side. (1.51+)
     *
     * @param side - The side to check
     * @param value - The value to set
    */
    export function setAnalogOutput(side: string, value: number): undefined;
    /**
     * Returns the analog value of the redstone that's being output on a side. (1.51+)
     *
     * @param side - The side to check
    */
    export function getAnalogOutput(side: string): number;
    /**
     * Returns the value of the bundled redstone on a side.
     *
     * @param side - The side to check
    */
    export function getBundledInput(side: string): number;
    /**
     * Sets the value of the bundled redstone output on a side.
     *
     * @param side - The side to check
     * @param colors - The value to set as a bitmask of colors
    */
    export function setBundledOutput(side: string, colors: number): undefined;
    /**
     * Returns the value of the bundled redstone that's being output on a side.
     *
     * @param side - The side to check
    */
    export function getBundledOutput(side: string): number;
    /**
     * Checks if a color is active in a bundled redstone wire.
     *
     * @param side - The side to check
     * @param color - The value to set as a bitmask
    */
    export function testBundledOutput(side: string, color: Color): boolean;
}
/**
 * Controls settings for CraftOS and programs. (1.77+)
 *
 * @noSelf
 * @noResolution
*/
declare module "settings" {
    /**
     * Sets a setting in the current settings.
     *
     * @param name - The key for the setting
     * @param value - The value for the setting
    */
    export function set(name: string, value: any): undefined;
    /**
     * Gets a setting from the current settings.
     *
     * @param name - The key for the setting
     * @param def - The default value to return if it doesn't exist
    */
    export function get(name: string, def?: any): any;
    /**
     * Removes a setting in the current settings.
     *
     * @param name - The key for the setting
    */
    export function unset(name: string): undefined;
    /**
     * Clears all settings.
     *
    */
    export function clear(): undefined;
    /**
     * Returns a list of keys.
     *
    */
    export function getNames(): Table;
    /**
     * Loads settings from a file.
     *
     * @param path - The file to access
    */
    export function load(path: string): undefined;
    /**
     * Saves settings to a file.
     *
     * @param path - The file to access
    */
    export function save(path: string): undefined;
    /**
     * Returns a table with details about a setting. (CC:t 1.87+)
     *
     * @param name - The name of the setting
    */
    export function getDetails(name: string): Table | undefined;
    /**
     * Defines a new setting, optionally specifying various properties about it. (CC:T 1.87+)
     *
     * @param name - The name of the setting to define
     * @param options - A table with any of the fields 'description', 'default', and 'type'.
    */
    export function define(name: string, options?: Table): undefined;
    /**
     * Removes a previously defined setting. (CC:T 1.87+)
     *
     * @param name - The name of the setting to undefine
    */
    export function undefine(name: string): undefined;
}
/**
 * Interacts with the CraftOS shell - not available to APIs.
 *
 * @noSelf
 * @noResolution
*/
declare module "shell" {
    /**
     * Exits the current shell.
     *
    */
    export function exit(): undefined;
    /**
     * Returns the current working directory.
     *
    */
    export function dir(): string;
    /**
     * Sets the current working directory.
     *
     * @param path - The directory to set
    */
    export function setDir(path: string): undefined;
    /**
     * Returns the current PATH.
     *
    */
    export function path(): string;
    /**
     * Sets the current PATH.
     *
     * @param path - The PATH to set
    */
    export function setPath(path: string): undefined;
    /**
     * Resolves a local path to an absolute path.
     *
     * @param localPath - The local path to resolve
    */
    export function resolve(localPath: string): string;
    /**
     * Returns the path to a program name.
     *
     * @param name - The name of the program
    */
    export function resolveProgram(name: string): string;
    /**
     * Returns a dictionary of aliases for programs.
     *
    */
    export function aliases(): Table;
    /**
     * Sets an alias for a program.
     *
     * @param alias - The name of the alias
     * @param program - The name of the program
    */
    export function setAlias(alias: string, program: string): undefined;
    /**
     * Removes an alias.
     *
     * @param alias - The name of the alias
    */
    export function clearAlias(alias: string): undefined;
    /**
     * Returns a list of all programs in the working directory and PATH.
     *
     * @param showHidden - Whether to show hidden programs
    */
    export function programs(showHidden?: boolean): Table;
    /**
     * Returns the absolute path to the current program.
     *
    */
    export function getRunningProgram(): string;
    /**
     * Runs a program/command.
     *
     * @param command - The command to run
     * @param ...args - Any arguments to pass to the program
    */
    export function run(command: string, ...args: LuaVarArgs<string>): boolean;
    /**
     * Opens a program in a new tab. (1.6+, advanced)
     *
     * @param command - The command to run
     * @param ...args - Any arguments to pass to the program
    */
    export function openTab(command: string, ...args: LuaVarArgs<string>): number;
    /**
     * Changes the current tab. (1.6+, advanced)
     *
     * @param tabID - The ID of the tab to switch to
    */
    export function switchTab(tabID: number): undefined;
    /**
     * Returns a list of suffixes that could complete a prefix. (1.74+)
     *
     * @param prefix - The prefix to complete
    */
    export function complete(prefix: string): Table;
    /**
     * Returns a list of suffixes that could complete a program prefix. (1.74+)
     *
     * @param prefix - The prefix to complete
    */
    export function completeProgram(prefix: string): Table;
    /**
     * Registers a completion function that is called by shell.complete().
     *
     * @param path - The path that this will be called on
     * @param completionFunction - The function to call
    */
    export function setCompletionFunction(path: string, completionFunction: ((...args: any[]) => any)): undefined;
    /**
     * Returns the table containing functions registered for shell.complete().
     *
    */
    export function getCompletionInfo(): Table;
}
/**
 * Provides functions for writing to the terminal.
 *
 * @noSelf
 * @noResolution
*/
declare module "term" {
    /**
     * Writes text to the screen.
     *
     * @param text - The text to write
    */
    export function write(text: string): undefined;
    /**
     * Writes text to the screen using specific colors.
     *
     * @param text - The text to write
     * @param textColors - The colors of the text
     * @param backgroundColors - The colors of the background
    */
    export function blit(text: string, textColors: string, backgroundColors: string): undefined;
    /**
     * Clears the screen.
     *
    */
    export function clear(): undefined;
    /**
     * Clears the current line.
     *
    */
    export function clearLine(): undefined;
    /**
     * Returns the current position of the cursor.
     *
    */
    export function getCursorPos(): MultiReturn<[number, number]>;
    /**
     * Sets the current position of the cursor.
     *
     * @param x - The X position
     * @param y - The Y position
    */
    export function setCursorPos(x: number, y: number): undefined;
    /**
     * Sets whether the cursor should blink.
     *
     * @param bool - Whether to blink the cursor
    */
    export function setCursorBlink(bool: boolean): undefined;
    /**
     * Returns whether the cursor blinks.
     *
    */
    export function getCursorBlink(): boolean;
    /**
     * Returns whether the terminal supports color.
     *
    */
    export function isColor(): boolean;
    /**
     * Returns whether the terminal supports colour.
     *
    */
    export function isColour(): boolean;
    /**
     * Returns the size of the terminal.
     *
    */
    export function getSize(): void;
    /**
     * Scrolls the screen a number of lines.
     *
     * @param n - The number of lines to scroll
    */
    export function scroll(n: number): undefined;
    /**
     * Redirects the terminal output to another terminal.
     *
     * @param target - The terminal to redirect to
    */
    export function redirect(target: Table): Table;
    /**
     * Returns the current terminal object. (1.6+)
     *
    */
    export function current(): Table;
    /**
     * Returns the original terminal object. (1.6+)
     *
    */
    export function native(): Table;
    /**
     * Sets the current text color.
     *
     * @param color - The color to set
    */
    export function setTextColor(color: Color): undefined;
    /**
     * Sets the current text colour.
     *
     * @param colour - The colour to set
    */
    export function setTextColour(colour: Color): undefined;
    /**
     * Sets the current background color.
     *
     * @param color - The color to set
    */
    export function setBackgroundColor(color: Color): undefined;
    /**
     * Sets the current background colour.
     *
     * @param colour - The colour to set
    */
    export function setBackgroundColour(colour: Color): undefined;
    /**
     * Gets the current text color. (1.74+)
     *
    */
    export function getTextColor(): Color;
    /**
     * Gets the current text colour. (1.74+)
     *
    */
    export function getTextColour(): Color;
    /**
     * Gets the current background color. (1.74+)
     *
    */
    export function getBackgroundColor(): Color;
    /**
     * Gets the current background colour. (1.74+)
     *
    */
    export function getBackgroundColour(): Color;
    /**
     * Returns the original RGB values of the specified color. (CC:T 1.81+)
     *
     * @param color - The color to get the default for
    */
    export function nativePaletteColor(color: Color): MultiReturn<[number, number, number]>;
    /**
     * Returns the original RGB values of the specified colour. (CC:T 1.81+)
     *
     * @param colour - The colour to get the default for
    */
    export function nativePaletteColour(colour: Color): MultiReturn<[number, number, number]>;
}
/**
 * Formats and manipulates strings.
 *
 * @noSelf
 * @noResolution
*/
declare module "textutils" {
    /**
     * Writes text to the screen slowly.
     *
     * @param text - The text to write
     * @param rate - The number of characters to write per second
    */
    export function slowWrite(text: string, rate: number): undefined;
    /**
     * Writes text to the screen slowly, with a newline.
     *
     * @param text - The text to write
     * @param rate - The number of characters to write per second
    */
    export function slowPrint(text: string, rate: number): undefined;
    /**
     * Returns a string representing a Minecraft time in either 12-hour or 24-hour time.
     *
     * @param time - The time to format
     * @param twentyFourHour - Whether to display the time in 24-hour time (optional)
    */
    export function formatTime(time: number, twentyFourHour?: boolean): string;
    /**
     * Prints rows of values in an ordered form, changing the text color if one is encountered.
     *
     * @param ...args - The rows to display or the color of the text
    */
    export function tabulate(...args: LuaVarArgs<Table | Color>): undefined;
    /**
     * Prints rows of values in an ordered form, changing the text color if one is encountered (paged).
     *
     * @param ...args - The rows to display or the color of the text
    */
    export function tabulate(...args: LuaVarArgs<Table | Color>): undefined;
    /**
     * Prints text, but waits to scroll if too much text is displayed.
     *
     * @param text - The text to write
     * @param freeLines - The number of lines to write before waiting (optional)
    */
    export function pagedPrint(text: string, freeLines?: number): number;
    /**
     * Converts a value into a string representation.
     *
     * @param data - The value to convert
    */
    export function serialize(data: any): string;
    /**
     * Converts a value into a string representation. (1.6+)
     *
     * @param data - The value to convert
    */
    export function serialise(data: any): string;
    /**
     * Converts a string representation into a value.
     *
     * @param serializedData - The value to convert
    */
    export function unserialize(serializedData: string): any;
    /**
     * Converts a string representation into a value. (1.6+)
     *
     * @param serializedData - The value to convert
    */
    export function unserialise(serializedData: string): any;
    /**
     * Converts a value into a JSON string. (1.7+)
     *
     * @param data - The value to convert
     * @param unquoteKeys - Whether to strip the quotation marks from keys (for MC commands)
    */
    export function serialize(data: any, unquoteKeys?: boolean): string;
    /**
     * Converts a value into a JSON string. (1.7+)
     *
     * @param data - The value to convert
     * @param unquoteKeys - Whether to strip the quotation marks from keys (for MC commands)
    */
    export function serialise(data: any, unquoteKeys?: boolean): string;
    /**
     * Converts a JSON string into a Lua value. (CC:T 1.87+)
     *
     * @param string - The JSON string to decode
     * @param options - A table with any of the fields 'nbt_style' and 'parse_null'
    */
    export function unserializeJSON(string: string, options?: Table): any;
    /**
     * Converts a JSON string into a Lua value. (CC:T 1.87+)
     *
     * @param string - The JSON string to decode
     * @param options - A table with any of the fields 'nbt_style' and 'parse_null'
    */
    export function unserialiseJSON(string: string, options?: Table): any;
    /**
     * Makes a string safe for a URL.
     *
     * @param urlUnsafeString - The string to encode
    */
    export function urlEncode(urlUnsafeString: string): string;
    /**
     * Returns a list of suffixes that could be combined with a prefix in an environment. (1.74+)
     *
     * @param partialName - Part of a variable name
     * @param environment - The environment to search in (optional)
    */
    export function complete(partialName: string, environment?: Table): Table;
}
/**
 * Creates window objects.
 *
 * @noSelf
 * @noResolution
*/
declare module "window" {
    /**
     * Creates a new window.
     *
     * @param parentTerm - The parent terminal of the window (use term.native() instead of term)
     * @param x - The X coordinate
     * @param y - The Y coordinate
     * @param width - The width
     * @param height - The height
     * @param visible - Whether the window is visible by default (optional)
    */
    export function create(parentTerm: Table, x: number, y: number, width: number, height: number, visible?: boolean): Table;
}
/**
 * The Turtle API is used to work with your Turtles.
 *
 * @noSelf
 * @noResolution
*/
declare module "turtle" {
    /**
     * Try to move the turtle forward.
     *
    */
    export function forward(): MultiReturn<[boolean, string | undefined]>;
    /**
     * Try to move the turtle backward.
     *
    */
    export function back(): MultiReturn<[boolean, string | undefined]>;
    /**
     * Try to move the turtle up.
     *
    */
    export function up(): MultiReturn<[boolean, string | undefined]>;
    /**
     * Try to move the turtle down.
     *
    */
    export function down(): MultiReturn<[boolean, string | undefined]>;
    /**
     * Turn the turtle left.
     *
    */
    export function turnLeft(): boolean;
    /**
     * Turn the turtle right.
     *
    */
    export function turnRight(): boolean;
    /**
     * Make the turtle select slot slotNum.
     *
     * @param slotNum - 1 is top left, 16 (9 in 1.33 and earlier) is bottom right
    */
    export function select(slotNum: number): boolean;
    /**
     * Indicates the currently selected inventory slot. (1.6+)
     *
    */
    export function getSelectedSlot(): number;
    /**
     * Counts how many items are in the currently selected slot or, if specified, slotNum slot.
     *
     * @param slotNum - 1 is top left, 16 (9 in 1.33 and earlier) is bottom right (optional)
    */
    export function getItemCount(slotNum?: number): number;
    /**
     * Counts how many remaining items you need to fill the stack in the currently selected slot or, if specified, slotNum slot.
     *
     * @param slotNum - 1 is top left, 16 (9 in 1.33 and earlier) is bottom right (optional)
    */
    export function getItemSpace(slotNum?: number): number;
    /**
     * Returns the ID string, count and damage values of currently selected slot or, if specified, slotNum slot. (1.64+)
     *
     * @param slotNum - 1 is top left, 16 (9 in 1.33 and earlier) is bottom right (optional)
    */
    export function getItemDetail(slotNum?: number): Table | undefined;
    /**
     * Attempts to equip an item in the current slot to the turtle's left side, switching the previously equipped item back into the inventory. (1.6+)
     *
    */
    export function equipLeft(): boolean;
    /**
     * Attempts to equip an item in the current slot to the turtle's right side, switching the previously equipped item back into the inventory. (1.6+)
     *
    */
    export function equipRight(): boolean;
    /**
     * Breaks and sucks the block in front. With hoe: tills the dirt in front of it.
     *
     * @param toolSide - left/right (optional)
    */
    export function dig(toolSide?: string): MultiReturn<[boolean, string | undefined]>;
    /**
     * Breaks and sucks the block above.
     *
     * @param toolSide - left/right (optional)
    */
    export function digUp(toolSide?: string): MultiReturn<[boolean, string | undefined]>;
    /**
     * Breaks and sucks the block below. With hoe: tills the dirt beneath the space below it.
     *
     * @param toolSide - left/right (optional)
    */
    export function digDown(toolSide?: string): MultiReturn<[boolean, string | undefined]>;
    /**
     * Places a block of the selected slot in front. Engrave signText on signs if provided. Collects water or lava if the currently selected slot is an empty bucket. (1.4+)
     *
     * @param signText - If you're placing a sign and signText is given, then the turtle places the sign putting the text of signText into it. Each line of the sign can be separated using newline (
) character (optional)
    */
    export function place(signText?: string): MultiReturn<[boolean, string | undefined]>;
    /**
     * Places a block of the selected slot above. Collects water or lava if the currently selected slot is an empty bucket.
     *
    */
    export function placeUp(): MultiReturn<[boolean, string | undefined]>;
    /**
     * Places a block of the selected slot below. Collects water or lava if the currently selected slot is an empty bucket.
     *
    */
    export function placeDown(): MultiReturn<[boolean, string | undefined]>;
    /**
     * Attacks in front of the turtle. (1.4+)
     *
     * @param toolSide - left/right (optional)
    */
    export function attack(toolSide?: string): MultiReturn<[boolean, string | undefined]>;
    /**
     * Attacks above the turtle. (1.4+)
     *
     * @param toolSide - left/right (optional)
    */
    export function attackUp(toolSide?: string): MultiReturn<[boolean, string | undefined]>;
    /**
     * Attacks under the turtle. (1.4+)
     *
     * @param toolSide - left/right (optional)
    */
    export function attackDown(toolSide?: string): MultiReturn<[boolean, string | undefined]>;
    /**
     * Detects if there is a block in front. Does not detect mobs.
     *
    */
    export function detect(): boolean;
    /**
     * Detects if there is a block above.
     *
    */
    export function detectUp(): boolean;
    /**
     * Detects if there is a block below.
     *
    */
    export function detectDown(): boolean;
    /**
     * Detects if the block in front is the same as the one in the currently selected slot. (1.31+)
     *
    */
    export function compare(): boolean;
    /**
     * Detects if the block above is the same as the one in the currently selected slot.
     *
    */
    export function compareUp(): boolean;
    /**
     * Detects if the block below is the same as the one in the currently selected slot
     *
    */
    export function compareDown(): boolean;
    /**
     * Returns the ID string and metadata of the block in front of the Turtle. (1.64+)
     *
    */
    export function inspect(): MultiReturn<[boolean, Table]> | string;
    /**
     * Returns the ID string and metadata of the block above the Turtle. (1.64+)
     *
    */
    export function inspectUp(): MultiReturn<[boolean, Table]> | string;
    /**
     * Returns the ID string and metadata of the block below the Turtle. (1.64+)
     *
    */
    export function inspectDown(): MultiReturn<[boolean, Table]> | string;
    /**
     * Compare the current selected slot and the given slot to see if the items are the same. Returns true if they are the same, false if not. (1.4+)
     *
     * @param slotNum - 1 is top left, 16 (9 in 1.33 and earlier) is bottom right (optional)
    */
    export function compareTo(slotNum?: number): boolean;
    /**
     * Transfers quantity items from the selected slot to slot. If quantity isn't specified, will attempt to transfer everything in the selected slot to slot. (1.45+)
     *
     * @param slotNum - 1 is top left, 16 (9 in 1.33 and earlier) is bottom right
     * @param quantity - Transfers [quantity] items from the selected slot to the specified slot (optional)
    */
    export function transferTo(slotNum: number, quantity?: number): MultiReturn<[boolean, string | undefined]>;
    /**
     * Drops all items in the selected slot, or specified, drops [count] items.  /  [>= 1.4 only:] If there is a inventory on the side (i.e in front of the turtle) it will try to place into the inventory, returning false if the inventory is full.
     *
     * @param count - Drops [count] items (optional)
    */
    export function drop(count?: number): MultiReturn<[boolean, string | undefined]>;
    /**
     * Drops all items in the selected slot, or specified, drops [count] items.  /  [>= 1.4 only:] If there is a inventory on the side (i.e above the turtle) it will try to place into the inventory, returning false if the inventory is full. (1.4+)
     *
     * @param count - Drops [count] items (optional)
    */
    export function dropUp(count?: number): MultiReturn<[boolean, string | undefined]>;
    /**
     * Drops all items in the selected slot, or specified, drops [count] items.  /  [>= 1.4 only:] If there is a inventory on the side (i.e below the turtle) it will try to place into the inventory, returning false if the inventory is full. If above a furnace, will place item in the top slot. (1.4+)
     *
     * @param count - Drops [count] items (optional)
    */
    export function dropDown(count?: number): MultiReturn<[boolean, string | undefined]>;
    /**
     * Picks up an item stack of any number, from the ground or an inventory in front of the turtle, then places it in the selected slot. If the turtle can't pick up the item, the function returns false (1.4+). The [amount] parameter requires ComputerCraft 1.6 or later
     *
     * @param amount - The turtle will attempt to pick up at most the specified number of items (optional)
    */
    export function suck(amount?: number): MultiReturn<[boolean, string | undefined]>;
    /**
     * Picks up an item stack of any number, from the ground or an inventory above the turtle, then places it in the selected slot. If the turtle can't pick up the item, the function returns false (1.4+). The [amount] parameter requires ComputerCraft 1.6 or later
     *
     * @param amount - The turtle will attempt to pick up at most the specified number of items (optional)
    */
    export function suckUp(amount?: number): boolean;
    /**
     * Picks up an item stack of any number, from the ground or an inventory below the turtle, then places it in the selected slot. If the turtle can't pick up the item, the function returns false (1.4+). The [amount] parameter requires ComputerCraft 1.6 or later
     *
     * @param amount - The turtle will attempt to pick up at most the specified number of items (optional)
    */
    export function suckDown(amount?: number): boolean;
    /**
     * Returns the current fuel level of the turtle, this is the number of blocks the turtle can move. If turtleNeedFuel = 0 then it returns unlimited.(1.4+)
     *
    */
    export function getFuelLevel(): number | string;
    /**
     * Returns the maximum amount of fuel a turtle can store - by default, 20,000 for regular turtles, 100,000 for advanced. If turtleNeedFuel = 0 then it returns unlimited. (1.6+)
     *
    */
    export function getFuelLimit(): number | string;
    /**
     * If the current selected slot contains a fuel item, it will consume it to give the turtle the ability to move. Added in 1.4 and is only needed in needfuel mode. If the current slot doesn't contain a fuel item, it returns false. If a [quantity] is specified, it will refuel only up to that many items, otherwise, it will consume all the items in the slot. (1.4+)
     *
     * @param quantity - If a [quantity] is specified, it will refuel only up to that many items, otherwise, it will consume all the items in the slot (optional)
    */
    export function refuel(quantity?: number): boolean;
    /**
     * (Only Crafty Turtle) Craft items using ingredients anywhere in the turtle's inventory and place results in the active slot. If a quantity is specified, it will craft only up to that many items, otherwise, it will craft as many of the items as possible. (1.4+)
     *
     * @param quantity - A parameter can also be supplied to specify the quantity of items to craft. If the quantity specified is 0, will return true if a valid recipe has been found in the turtle's inventory, and false otherwise (optional)
    */
    export function craft(quantity?: number): boolean;
}
