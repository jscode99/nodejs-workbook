/**
 * ========================================== Binary Data ================================================
 * -) Computers store and represent data in binary format which is a collection of 0s and 1s.
 * -) Each 0 or 1 is called a binary digit or "bit" for short.
 * -) To work with a piece of data, a computer needs to convert that data into its binary representation.
 * 
 * 1 - 1
 * 2 - 10
 * 3 - 11
 * 4 - 100
 * 5 - 101
 * 6 - 110
 * 7 - 111
 * 8 - 1000
 * 9 - 1001
 * 10 - 1010
 * 
 * For binary digit conversion, we relay on base 2 numeric system.
 * -) Eg:- for 4 computer use 100 -> 2^2 * 1 + 2^1 * 0 + 2^0 * 0 => 4 + 0 + 0 = 4
 * 
 * 
 * For character conversion, computer will first convert the character to a number, then convert that number to its binary representation.
 * -) Eg: for "J", computer will first convert "J" to a number that represents J which is 74.
 *        74 is the numeric representation of character "J". It is also called "Character Code".
 */

/**
 * ========================================== Character Sets ================================================
 * -) Predefined lists of characters represented by numbers.
 * -) Most popular character sets - Unicode and ASCII.
 * -) Unicode character set dictates that 74 should represent character "J".
 */

/**
 * ========================================== Character Encoding ================================================
 * -) It dictates how to represent a number in a character set as binary data before it can be stored in a computer.
 * -) It dictates how many bits to use to represent the number.
 * -) Example of a character encoding system is UTF-8.
 * -) UTF-8 states that characters should be encoded in bytes (8 bits).
 * -) Eight 1s or 0s should be used to represent the code of any character in binary.
 * -) Eg:- 4 => 100 => 00000100
 */