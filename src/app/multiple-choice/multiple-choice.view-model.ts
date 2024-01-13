export type MultipleChoice = {
    readonly question: string;
    readonly choices: Choice[];
    readonly answer: string;
};

type Choice = {
    readonly label: string;
    readonly value: string;
};

export type MultipleChoiceViewModel = MultipleChoice & {
    readonly index: number;
    chosenChoice: string | undefined;
    isAnswerRevealed: boolean;
};

export function buildMultipleChoiceViewModels(multipleChoices: MultipleChoice[]): MultipleChoiceViewModel[] {

    return multipleChoices.map((m, index) => ({
        ...m,
        index: index,
        chosenChoice: undefined,
        isAnswerRevealed: false
    }));
}