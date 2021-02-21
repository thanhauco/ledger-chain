export class Voting {
    votes: Map<string, number> = new Map();
    vote(candidate: string) {
        this.votes.set(candidate, (this.votes.get(candidate) || 0) + 1);
    }
}