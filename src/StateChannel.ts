export class StateChannel {
    constructor(public participantA: string, public participantB: string) {}
    updateState(newState: any, sigA: string, sigB: string) {
        // Verify signatures
    }
}