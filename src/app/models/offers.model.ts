export class OffersModel {
  constructor(
    public name: string,
    public description: string,
    public link: string,
    public image: string,
    public offerOneHead: string,
    public offerOneDescription: string,
    public offerOneParagraph: string,
    public offerOneList: {}[],
    public offerOneImage: string,
    public offerTwoHead: string,
    public offerTwoDescription: string,
    public offerTwoParagraph: string,
    public offerTwoList: {}[],
    public offerTwoImage: string
  ) {}
}
