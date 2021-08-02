export const PageLink = (props) => {
    const { href,title } = props;
    return (
      <>
        <div className="w-full h-full">
          <a href={href} title={title} target="_blank" rel="noopener noreferrer">
            <img src={"https://capture.heartrails.com/200x200/cool?" + href} alt="linkimg" />
          </a>
        </div>
      </>
    );
  }