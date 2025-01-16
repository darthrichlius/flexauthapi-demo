export interface ICommand {
  execute: (data: any) => Promise<any>;
}
