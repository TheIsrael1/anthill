interface ILoadableImage {
  image: string; //will serve as video placeholder  untill
  video: string;
  link: string;
}

const LoadableImage = ({}: ILoadableImage) => {
  return <div>LoadableImage</div>;
};

export default LoadableImage;
