/**
 * Created by Viet Anh Tran on 06-May-17.
 */
var assert = require('assert');

describe('Add player input to array', function () {
    it("Add player input based on specified index - index 3", function () {
        let expected = {squares: [null, null, null, "X", null, null, null, null, null,], xIsNext: false};
        let squareInfo = Array(9).fill(null);
        let actual = addPlayerInputToSpecifiedIndex({squares: squareInfo, xIsNext: true}, 3);
        assert.deepEqual(expected, actual);
    });

    it("Add player input based on specified index - index 6", function () {
        let expected = {squares: [null, null, null, null, null, null, "X", null, null,], xIsNext: false};
        let squareInfo = Array(9).fill(null);
        let actual = addPlayerInputToSpecifiedIndex({squares: squareInfo, xIsNext: true}, 6);
        assert.deepEqual(expected, actual);
    });

    it("Update xIsNext property after adding player input", function () {
        let expected = {squares: [null, null, "X", null, null, null, null, null, null,], xIsNext: false};
        let squareInfo = Array(9).fill(null);
        let actual = addPlayerInputToSpecifiedIndex({squares: squareInfo, xIsNext: true}, 2);
        assert.deepEqual(expected, actual);
    });

    it("Add player input and update xIsNext property when xIsNext is false", function () {
        let expected = {squares: [null, null, "X", "O", null, "X", "O", null, null,], xIsNext: true};
        let squareInfo = [null, null, "X", "O", null, "X", null, null, null,];
        let actual = addPlayerInputToSpecifiedIndex({squares: squareInfo, xIsNext: false}, 6);
        assert.deepEqual(expected, actual);
    });

    it("Add player input and update xIsNext property when xIsNext is true", function () {
        let expected = {squares: [null, "X", null, "X", null, "O", "X", "O", null], xIsNext: false};
        let squareInfo = [null, null, null, "X", null, "O", "X", "O", null];
        let actual = addPlayerInputToSpecifiedIndex({squares: squareInfo, xIsNext: true}, 1);
        assert.deepEqual(expected, actual);
    });

});



describe("Determine winner based on stored player inputs",function () {
    it("Get all indexes of most recent player input",function () {
        let expect = [0, 2 ,4];
        let squares = ["X", "O", "X", "O", "X"];
        let actual = VerifyWinner(squares);
        assert.deepEqual(expect, actual);
    })

    it("Get all indexes of most recent player input - second test",function () {
        let expect = [1, 3];
        let squares = ["X", "O", "X", "O"];
        let actual = VerifyWinner(squares);
        assert.deepEqual(expect, actual);
    })

    it("Get all indexes of most recent player input - again",function () {
        let expect = [0, 2, 4];
        let squares = ["X", "O", "X", "O", "X"];
        let actual = VerifyWinner(squares);
        assert.deepEqual(expect, actual);
    })
})



function addPlayerInput(squares) {
    if(LastInputIsX(squares))
    {
        squares.push("O");
    }
    else
    {
        squares.push("X");
    }
    return squares;
}


function VerifyWinner(squares){
    let latestPlayerInput = squares[squares.length - 1];
    let indexOfLatestPlayerInput = [];
    for(let counter = 0; counter < squares.length; counter++)
    {
        if(squares[counter] == latestPlayerInput)
        {
            indexOfLatestPlayerInput.push(counter);
        }
    }
    return indexOfLatestPlayerInput;
}

function addPlayerInputToSpecifiedIndex(squareInfo, specifiedIndex) {
    if(squareInfo.xIsNext == true)
    {
        squareInfo.squares[specifiedIndex] = "X";
    }
    else
    {
        squareInfo.squares[specifiedIndex] = "O";
    }
    squareInfo.xIsNext = !squareInfo.xIsNext;
    return squareInfo;
}