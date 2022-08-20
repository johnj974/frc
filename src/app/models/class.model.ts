export class ClassModel {
  constructor(
    public name: string,
    public description: string,
    public day: string,
    public time: string,
    public goal: string[],
    public image: string,
    public longDescription: string
  ) {}
}
