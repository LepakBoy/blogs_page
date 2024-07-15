import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';
import MessageInput from './messageInput';

interface FileUploaderProps {
  setFileName: (name: string) => void;
  ref: any;
}

const fileAcceptType = ['jpg', 'jpeg', 'png'];

const checkFileType = (type: string) => {
  const extension = type.split('.')[1];

  console.log(extension, 'ext');
  if (!fileAcceptType.includes(extension.toLocaleLowerCase())) {
    alert('gagal');
    return true;
  }
};

const FileUploader = forwardRef((props: FileUploaderProps, ref) => {
  const toast = useRef<Toast>(null);
  const maxSizeFile = 600000;
  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef<FileUpload>(null);

  useImperativeHandle(ref, () => ({
    upload: () => {
      if (fileUploadRef.current) {
        fileUploadRef.current.upload();
      }
    },
  }));

  const onTemplateSelect = (e: any) => {
    let _totalSize = totalSize;
    let files = e.files;

    console.log(e, 'eeee');
    if (checkFileType(e.files[0].name)) return;

    if (totalSize > maxSizeFile) return;

    props.setFileName(e.files[0]?.name);

    Object.keys(files).forEach((key) => {
      _totalSize += files[key].size || 0;
    });

    setTotalSize(_totalSize);
  };

  const onTemplateUpload = (e: any) => {
    let _totalSize = 0;

    e.files.forEach((file: any) => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);
    // toast.current?.show({
    //   severity: 'info',
    //   summary: 'Success',
    //   detail: 'File Uploaded',
    // });

    // Clear the files after successful upload
    if (fileUploadRef.current) {
      setTimeout(() => {
        fileUploadRef.current?.clear();
      }, 1000);
    }
    onTemplateClear();
  };

  const onTemplateRemove = (file: any, callback: () => void) => {
    // if allowed multiple image
    // setTotalSize(totalSize - file.size);

    // if only allowed 1 image
    setTotalSize(0);
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
    props.setFileName('');
  };

  const headerTemplate = (options: any) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = totalSize / 10000;
    const formatedValue = fileUploadRef.current
      ? fileUploadRef.current.formatSize(totalSize)
      : '0 B';

    return (
      <div
        className={`${className} border-gray-300 border `}
        style={{
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {chooseButton}
        {/* {uploadButton} */}
        {cancelButton}
        <div className="flex items-center gap-3 px-3 ml-auto">
          <span className="text-sm text-gray-500">
            {formatedValue} / 600 KB{' '}
          </span>
          <ProgressBar
            value={value}
            showValue={false}
            style={{ width: '10rem', height: '12px' }}
          ></ProgressBar>
        </div>
      </div>
    );
  };

  const itemTemplate = (file: File | any, props: any) => {
    return (
      <div className="flex align-items-center border-gray-300 border justify-between flex-wrap">
        <div
          className="flex align-items-center"
          style={{ width: '40%' }}
        >
          <img
            alt={file.name}
            role="presentation"
            src={file.objectURL}
            width={100}
          />
          <span className="flex items-center flex-column text-left ml-3">
            {file.name}
            {/* <small>{new Date().toLocaleDateString()}</small> */}
          </span>
        </div>
        <Tag
          value={props.formatSize}
          severity="warning"
          className="px-3 py-2"
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger ml-auto"
          onClick={() => onTemplateRemove(file, props.onRemove)}
        />
      </div>
    );
  };

  const emptyTemplate = () => {
    return (
      <div className="flex items-center border-gray-300 border  justify-center p-9 flex-col">
        <i
          className="pi pi-image mt-3 p-5"
          style={{
            fontSize: '5em',
            borderRadius: '50%',
            backgroundColor: 'var(--surface-b)',
            color: 'var(--surface-d)',
            width: '126px',
            height: '126px',
          }}
        ></i>
        <span
          style={{ color: 'var(--text-color-secondary)' }}
          className="my-3 text-base"
        >
          {'Drag and Drop Image Here (only 1 image allowed)'}
        </span>
      </div>
    );
  };

  const chooseOptions = {
    icon: 'pi pi-fw pi-images',
    iconOnly: true,
    className: 'custom-choose-btn p-button-rounded p-button-outlined',
  };
  const uploadOptions = {
    icon: 'pi pi-fw pi-cloud-upload',
    iconOnly: true,
    className:
      'custom-upload-btn p-button-success p-button-rounded p-button-outlined',
  };
  const cancelOptions = {
    icon: 'pi pi-fw pi-times',
    iconOnly: true,
    className:
      'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined',
  };

  return (
    <div className="relative">
      <Toast ref={toast} />
      <Tooltip
        target=".custom-choose-btn"
        content="Choose"
        position="bottom"
      />
      <Tooltip
        target=".custom-cancel-btn"
        content="Clear"
        position="bottom"
      />

      <FileUpload
        ref={fileUploadRef}
        name="file"
        url="/api/upload"
        accept="image/*"
        multiple={false}
        maxFileSize={600000}
        onUpload={onTemplateUpload}
        onSelect={onTemplateSelect}
        onError={onTemplateClear}
        onClear={onTemplateClear}
        headerTemplate={headerTemplate}
        itemTemplate={itemTemplate}
        emptyTemplate={emptyTemplate}
        chooseOptions={chooseOptions}
        uploadOptions={uploadOptions}
        cancelOptions={cancelOptions}
      />
      {!totalSize && <MessageInput msg="You haven't select an image.." />}
    </div>
  );
});

export default FileUploader;
