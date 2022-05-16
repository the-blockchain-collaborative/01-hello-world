// SPDX License Identifier: MIT
pragma solidity <=0.8.9;

contract HelloWorld {
    // "string" is the type of variable
    // "private" means that the variable is only accessible inside the contract
    string private message = "Hello World!";

    // "function" is how we decalre a function
    // "public" means that the function is accessible outside the contract
    // "view" means that teh function does not write to the blockchain
    // "memory" means that the data is held in temporary contract storage
    function Greeting() public view returns (string memory) {
        return message;
    }
}