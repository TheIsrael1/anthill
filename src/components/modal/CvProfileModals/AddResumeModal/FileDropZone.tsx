import { useDropzone } from 'react-dropzone';
import Icon from 'utils/Icon';
const FileDropzone = ({ onDrop, file }: any) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <section {...getRootProps()}>
      <input {...getInputProps()} />
      {file ? (
        <div className='flex justify-center items-center gap-3 py-4 mt-4 border rounded-lg hover:cursor-pointer'>
          <Icon name='uploadIcon'></Icon>
          <p className='text-sm'>{file.name}</p>
        </div>
      ) : isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div className='flex justify-center items-center gap-3 py-4 mt-4 border rounded-lg hover:cursor-pointer'>
          <Icon name='uploadIcon'></Icon>
          <p className='text-sm text-secondary-1'>
            Drop a file to add, <span className='text-primary-1'>or Choose File</span>
          </p>
        </div>
      )}
    </section>
  );
};

export default FileDropzone;
