export const pageRenderer  = (Wrapped: any) => {
  return function (props: any) {
    const { data } = props;
    return (
      <>
        {!data && <p>Loading</p>}
        {data && data.length === 0 && <p>Loading</p>}
        {data && data.length > 0 && <Wrapped {...props} />}
      </>
    )
  }
};
