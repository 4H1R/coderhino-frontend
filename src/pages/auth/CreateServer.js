import React, { useState } from "react";
import { setTimeout } from "timers";
import Input from "shared/form/Input";
import Button from "shared/form/Button";
import { Formik, Form } from "formik";
import servericondefault from "assets/images/servericondefault.png";

function CreateServer() {
  const [file, setFile] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [base64, setBase64] = useState("");
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e) => {
    console.log("file", e.target.files[0]);
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded;
      reader.readAsBinaryString(file);
    }
  };

  const _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    setBase64(btoa(binaryString));
  };

  const onFileSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log("bine", base64);
    let payload = { image: base64 };
    console.log("payload", payload);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log("reader", reader);
    console.log("file", file);
    if (reader !== undefined && file !== undefined) {
      reader.onloadend = () => {
        setFile(file);
        setSize(file.size);
        setName(file.name);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const remove = () => {
    setFile("");
    setImagePreview("");
    setBase64("");
    setName("");
    setSize("");
  };

  return (
    <Formik>
      <form onSubmit={(e) => onFileSubmit(e)} onChange={(e) => onChange(e)}>
        <div>
          {imagePreview === "" ? (
            <img src={servericondefault} alt="Default Server Icon" />
          ) : (
            <img src={imagePreview} alt="Uploaded Server Icon" />
          )}
          <br />
          <br />
          <Input
            type="file"
            name="file"
            id="file"
            onChange={photoUpload}
            src={imagePreview}
          />

          {imagePreview !== "" && (
            <>
              <section>
                <span>{size}</span>
              </section>

              <Button type="submit" text="Submit" />
              <Button type="button" onClick={remove} text="Remove" />
            </>
          )}
        </div>
      </form>
    </Formik>
  );
}

export default CreateServer;
