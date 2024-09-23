import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("_saveQuestion", () => {
    it("should resolve with a formatted question when save success.", async () => {
        const question = {
            optionOneText: "Option One",
            optionTwoText: "Option Two",
            author: "authorName",
        };

        const result = await _saveQuestion(question);

        expect(result).toHaveProperty("author", "authorName");
        expect(result.optionOne).toHaveProperty("text", "Option One");
        expect(result.optionTwo).toHaveProperty("text", "Option Two");
    });

    it("should return an error if incorrect data is passed", async () => {
        const invalidQuestion = {
            optionOneText: "Option One",
        };

        await expect(_saveQuestion(invalidQuestion)).rejects.toEqual(
            "Please provide optionOneText, optionTwoText, and author"
        );
    });
});

describe("_saveQuestionAnswer", () => {
    it("should resolve when save question success.", async () => {
        const authedUser = "mtsamis";
        const qid = "6ni6ok3ym7mf1p33lnez";
        const answer = "optionOne";

        await expect(_saveQuestionAnswer({ authedUser, qid, answer })).resolves.toBe(true);
    });

    it("should reject when authedUser is missing", async () => {
        const qid = "6ni6ok3ym7mf1p33lnez";
        const answer = "optionOne";

        await expect(_saveQuestionAnswer({ qid, answer })).rejects.toBe(
            "Please provide authedUser, qid, and answer"
        );
    });
});
