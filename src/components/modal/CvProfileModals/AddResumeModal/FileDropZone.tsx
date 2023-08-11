import { useDropzone } from 'react-dropzone';

const FileDropzone = ({ onDrop, file }: any) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <section {...getRootProps()}>
      <input {...getInputProps()} />
      {file ? (
        <p>{file?.name}</p>
      ) : isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div>
          <div>
            {/* <BiLinkAlt color="red" fontSize={"1.3rem"}/> */}
            <p>Drag and drop or browse a file of 20MB overall</p>
          </div>
          {/* <MdError
							color={"black"}
						/> */}
        </div>
      )}
    </section>
  );
};

export default FileDropzone;
