import React, { useState, useRef } from "react";
import styled from 'styled-components';
import UploadIcon from '../../images/drag-drop-icon.svg';

const UploadContainer = styled.div`
  height: 200px;
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

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UploadContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
`;

const ClickText = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  >span {
    display: flex;
    color: #0052CC;
    font-weight: 600;
    font-size: 14px;
    >p {
      color: #667085;
      margin-bottom: 4px;
      padding-left: 4px;
      font-weight: 400;
      font-size: 14px;
      isplay: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
`;

const UploadText = styled.div`
  > p {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    color: #667085;
    padding-left: 8px;
  }
`;

const UploadZone = styled.input`
  display: none;
`;

const UploadedFilesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const RemoveIcon = styled.span`
  color: #FF0000;
  cursor: pointer;
  margin-left: 6px;
  display: inline-block;
  vertical-align: middle;
  font-size: 22px;
`;

const fileTypes = ["SVG", "PNG", "JPG", "GIF"];

const UploadDragDrop = () => {
  const [file, setFile] = useState(null);
  const fileUploaderRef = useRef(null);

  const handleFileClick = () => {
    if (fileUploaderRef.current) {
      fileUploaderRef.current.click();
    }
  };

  const handleChange = (files) => {
    setFile(files[0]);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div>
      <UploadContainer>
        <UploadImgText>
          <ImageWrapper>
            <img src={UploadIcon} alt="Upload Icon" />
          </ImageWrapper>
          <UploadContainerText>
            <ClickText onClick={handleFileClick}>
              <span>Click to upload <p>or drag and drop</p></span>
            </ClickText>
            <UploadText>
              <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </UploadText>
            <UploadZone
              ref={fileUploaderRef}
              type="file"
              accept={fileTypes.map(type => `image/${type.toLowerCase()}`).join(',')}
              multiple
              onChange={(e) => handleChange(e.target.files)}
            />
          </UploadContainerText>
        </UploadImgText>
      </UploadContainer>
      <UploadedFilesList>
      <p>{file ? `File name: ${file.name}` : ""} {file && <RemoveIcon onClick={handleRemoveFile}>&times;</RemoveIcon>}</p>
      </UploadedFilesList>
    </div>
  );
}

export default UploadDragDrop;
