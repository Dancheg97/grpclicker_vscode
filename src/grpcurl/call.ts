import { Message } from "./message";

export class Call {
  public input: Message;
  public output: Message;
  public name: string;
  public fullName: string;
  constructor(private lines: string[]) {}
}
