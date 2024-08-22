export default interface IPost {
  id?: string | number;
  title: string,
  description: string,
  tags: {tag:string}[]
}