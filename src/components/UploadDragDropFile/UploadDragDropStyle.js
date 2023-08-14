import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import UploadIcon from '../../images/drag-drop-icon.svg';

//Assests 

const UploadContainer = styled.div`
  height: 150px;
  border: 1px solid #EAECF0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const UploadImgText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLabel = styled.label`
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UploadContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: centre;
    align-items: center;
    margin-top: 12px;
  }
`;

const ClickText = styled.div`
>span {
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  color: #0052CC;
  margin-bottom: 8px;

  >p {
    margin-bottom: 0px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: #667085;
    padding-left: 8px;
  }
}
`;

const CrossIcon = styled.span`
  cursor: pointer;
  padding-left: 8px;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const UploadText = styled.div`
    >p {
      margin-bottom: 0px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      color: #667085;
      padding-left: 8px;
    }
`;

const UploadZone = styled.input`
  display: none;
`;

const ClickOverlay = styled.div`
  /* Overlay to cover the clickable area */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const UploadedFilesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
`;

const UploadedFileItem = styled.li`
  margin: 5px 0;
`;

const DragAndDropUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const removeFile = (index) => {
    const updatedFiles = uploadedFiles.filter((file, i) => i !== index);
    setUploadedFiles(updatedFiles);
  };

  const fileInputRef = useRef(null);

  const handleOverlayClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };


  return (
    <div>
      <UploadContainer onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
        <UploadImgText>
          <StyledLabel htmlFor="fileInput">
            <ImageWrapper>
              <img src={UploadIcon} />
            </ImageWrapper>
          </StyledLabel>
          <label htmlFor="fileInput">
            <UploadContainerText>
            <ClickOverlay onClick={handleOverlayClick} />
              <ClickText>
                <span>Click to upload <p>or drag and drop</p></span>
              </ClickText>
              <UploadText>
                <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </UploadText>
            </UploadContainerText>
          </label>
        </UploadImgText>
        <UploadZone
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileInput} />
      </UploadContainer>
      <UploadedFilesList>
        {uploadedFiles.map((file, index) => (
          <UploadedFileItem key={index}>{file.name}</UploadedFileItem>
        ))}
        {uploadedFiles.map((file, index) => (
          <CrossIcon key={index} onClick={() => removeFile(index)}>x</CrossIcon>
        ))}
      </UploadedFilesList>
    </div>
  );
};

export default DragAndDropUpload;

