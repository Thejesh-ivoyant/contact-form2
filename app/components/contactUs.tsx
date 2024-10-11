import {  useFetcher, useNavigate } from "@remix-run/react";
import { Checkbox, Col, Row } from 'antd';
import type { CheckboxProps, GetProp } from 'antd';

import { useState, useEffect, useRef } from "react";

import ivurl from '../../public/assets/logo.svg';
import ivurl2 from '../../public/assets/logo-white.svg';

import { errorMessage } from "~/utils/notifications";



import { Select } from "antd";
interface ErrorData {
  errors: {
    email?: string;
    name?: string;
    phone?: string;
    companyname?: string;
    isSuccess?: string;
    title?: string;
  };
}

type CheckboxValueType = GetProp<typeof Checkbox.Group, 'value'>[number];





const plainOptions = ['Software Development & Engineering', 'User Experience (UX) & Interface Design', 'Cloud Architecture & DevSecOps', 'Product & Project Management', 'Integration & Microservices', 'Digital Transformation & Consulting', 'Artificial Intelligence & Machine Learning'];
const plainOptions2 = ['Software Development & Engineering', 'Cloud Architecture & DevSecOps' , 'Integration & Microservices', 'Artificial Intelligence & Machine Learning', 'User Experience (UX) & Interface Design', 'Product & Project Management', 'Digital Transformation & Consulting'];
 
const ContactUs = () => {

  // let Countries = countryTelephoneData.allCountries?.map((item:any) => ({
  //   value: item.dialCode,
  //   label:`+(${item.dialCode})`,
  // }));
  const Countries: { value: string, label: string }[] = [
    { value: "+1", label: "+1" }, /* Canada *//* United States */
    { value: "+54", label: "+54" }, /* Argentina */
    { value: "+501", label: "+501" }, /* Belize */
    { value: "+591", label: "+591" }, /* Bolivia */
    { value: "+55", label: "+55" }, /* Brazil */
    { value: "+56", label: "+56" },/* Chile */
    { value: "+57", label: "+57" }, /* Colombia */
    { value: "+506", label: "+506" }, /* Costa Rica */
    { value: "+593", label: "+593" }, /* Ecuador */
    { value: "+503", label: "+503" }, /* El Salvador */
    { value: "+502", label: "+502" }, /* Guatemala */
    { value: "+504", label: "+504" }, /* Honduras */
    { value: "+52", label: "+52" }, /* Mexico */
    { value: "+505", label: "+505" }, /* Nicaragua */
    { value: "+507", label: "+507" }, /* Panama */
    { value: "+595", label: "+595" }, /* Paraguay */
    { value: "+51", label: "+51" }, /* Peru */
    { value: "+598", label: "+598" }, /* Uruguay */
    { value: "+58", label: "+58" },/* Venezuela */
    { value: "+91", label: "+91" } /*India*/
  ]


  const [countryCode, setCountryCode] = useState('1');
  const [companyname, setCompanyName] = useState('');
  const [personname, setPersonName] = useState('');
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [emailerror, setEmailError] = useState('');
  const [nameerror, setNameError] = useState('');
  const [titleerror, setTitleError] = useState('');
  const [phoneerror, setPhoneError] = useState('');
  const [companyerror, setCompanyError] = useState('');

  const [phoneNumber, setPhoneNumber] = useState("");
  function isValidPhoneNumber(phone: any) {
    // Implement phone number validation logic
    return /^[0-9]+$/.test(phone); // For simplicity, this just checks if the phone number contains only digits
  }
  const handlePhoneNumberChange = (e: any) => {
    const phone = e.target.value;
    setPhoneNumber(e.target.value);
    setPhoneError("");
    if (!phone) {
      setPhoneError("Phone number is required");
    } else if (!isValidPhoneNumber(phone)) {
      setPhoneError("Invalid phone number format");
    }

  };


  const handleEmailChange = (e: any) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Reset email error
    setEmailError("");

    // Validate email
    if (!emailValue.trim()) {
      setEmailError("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setEmailError("Invalid email address");
    }
  };



  const handlePersonNameChange = (e: any) => {
    const personname = e.target.value;
    setPersonName(e.target.value);
    setNameError("");
    if (!personname) {

      setNameError("Full name is required");
    }
  };

  const handleCompanyNameChange = (e: any) => {
    const companyName = e.target.value // Trim any leading/trailing spaces
    setCompanyName(e.target.value);
    setCompanyError("");

    if (!companyName) {
      setCompanyError("Company name is required");
    }
  };


  const handleTitleChange = (e: any) => {
    const title = e.target.value;
    setTitle(e.target.value);
    // setTitleError("");
    // if (!/^[a-zA-Z\s]*$/.test(title)) {
    //   setTitleError("Title must contain only letters and spaces");
    // }
  };

  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);

  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;
  const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };
  const onCheckAll = () => {
    if (!checkAll) {
      setCheckedList(plainOptions);
    }
    else {
      setCheckedList([]);
    }

  };
  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };


  useEffect(() => {
    // console.log('checked = ', checkedList);
    // console.log("checked hub spot", checkedList.toString());
  }, [checkedList]);



  const handleCountryCodeChange = (value: string) => {
    const selectedCountryCode = value;
    setCountryCode(selectedCountryCode);

    // console.warn("comyry cod4", selectedCountryCode);
  };

  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const onSearch = (value: string) => {
    console.log('search:', value);
    if (value) {
      setCountryCode(value);
    }
    else {
      setCountryCode("+1");
    }
  };


  const fetcher = useFetcher();
  let $formref = useRef<HTMLFormElement>(null)
  const navigate = useNavigate();
  useEffect(() => {
    if (fetcher.state === "idle") {
      // Reset form and set default values
      $formref.current?.reset();
      setCountryCode("+1");
      setPhoneNumber("");
      setEmail("");
      setCompanyName("");
      setPersonName("");
      setTitle("");
      if (fetcher.data == null) {
      }
      else {

        // If data exists, there are errors

        // Parse JSON data and type cast it to ErrorData
        const errorData = fetcher.data as ErrorData;

        // Extract individual errors
        const emailError = errorData?.errors?.email;
        const nameError = errorData?.errors?.name;
        const phoneError = errorData?.errors?.phone;
        const companyNameError = errorData?.errors?.companyname;
        const isSuccessValue = errorData?.errors?.isSuccess;
        const titleError = errorData?.errors?.title;
        console.warn("status", isSuccessValue)
        if (isSuccessValue === "Success") {
          // success("Thank you for sharing your details!",4);
          navigate('/success')
        } else {

          // Set errors to corresponding state variables
          if (emailError !== undefined) {
            setEmailError(emailError);

          }
          // Set errors to corresponding state variables
          if (titleError !== undefined) {
            setTitleError(titleError);

          }
          if (nameError !== undefined) {
            setNameError(nameError);

          }
          if (phoneError !== undefined) {
            setPhoneError(phoneError);
          }
          if (companyNameError !== undefined) {
            setCompanyError(companyNameError);
          }
          if (isSuccessValue === "Failed") {
            errorMessage("Error occured, Please resubmit", 4);
            $formref.current?.reset();
            setCountryCode("+1");
            setPhoneNumber("");
            setEmail("");
            setCompanyName("");
            setPersonName("");
            setTitle("");
            setCheckedList([]);
          }
        }

      }
    }
  }, [fetcher.state, fetcher.data]);

  const isCreatingNewPost = fetcher.state === "submitting";


  useEffect(() => {
    console.log(
      "fetcher state (is submidfat)" + isCreatingNewPost
    )
  }, [isCreatingNewPost])


  //speech

  // const [speechRecognitionActive, setSpeechRecognitionActive] = useState(false);
  // const [transcribedText, setTranscribedText] = useState("");

  // const startSpeechRecognition = async () => {
  //   const speechConfig = sdk.SpeechConfig.fromSubscription("5a33cab29b9d4088a3d1919302706978", "eastus");
  //   const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();

  //   const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

  //   recognizer.recognizing = (_, event) => {
  //     if (event.result.text) {
  //       setTranscribedText(event.result.text);
  //     }
  //   };

  //   recognizer.startContinuousRecognitionAsync();
  //   setSpeechRecognitionActive(true);
  // };

  // const stopSpeechRecognition = async () => {
  //   // Stop speech recognition
  //   setSpeechRecognitionActive(false);
  // };

  // Use useEffect to start/stop speech recognition based on speechRecognitionActive state
  // useEffect(() => {
  //   if (speechRecognitionActive) {
  //     startSpeechRecognition();
  //   } else {
  //     stopSpeechRecognition();
  //   }

  //   // Clean up the recognizer when component unmounts
  //   return () => {
  //     stopSpeechRecognition();
  //   };
  // }, [speechRecognitionActive]);

  // Use transcribedText state to populate form fields
  // useEffect(() => {
  //   console.log("Transcribed text:", transcribedText);

  //   const fetchData = async () => {
  //     try {
  //       // Perform NLP operation on the email
  //       const name = await NLP(transcribedText);
  //       console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", name)


  //       // Define regular expressions to extract email and phone number
  //       const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  //       const phoneRegex = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/;

  //       // Extract email and phone number from the transcribed text using regular expressions
  //       const extractedEmail = transcribedText.match(emailRegex);
  //       const extractedPhoneNumber = transcribedText.match(phoneRegex);

  //       // Populate form fields with extracted information
  //       if (extractedEmail) {
  //         console.warn("Email found:", extractedEmail[0]);
  //         setEmail(extractedEmail[0]); // Assuming setEmail is a state setter function for email field
  //       }

  //       const regex = /[-. ]/g;

  //       // Remove hyphens, dots, or extra whitespace from the extracted phone number
  //       const cleanPhoneNumber = extractedPhoneNumber ? extractedPhoneNumber[0].replace(regex, '') : '';

  //       // Set the cleaned phone number in the state
  //       if (cleanPhoneNumber) {
  //         setPhoneNumber(cleanPhoneNumber);
  //       }
  //     } catch (error) {
  //       console.error("Error occurred while fetching data:", error);
  //     }
  //   };

  //   // Call the fetchData function immediately
  //   fetchData();
  // }, [transcribedText]);


  return (
    <>
      <div className="flex flex-col mx-auto my-auto w-full  form-section ">

        {" "}



        {/* <button className="bg-blue-400 white" onClick={() => setSpeechRecognitionActive(true)}>{speechRecognitionActive ? 'Listening...' : 'Start Speech Recognition'}</button>
        <br/>
        <button onClick={() => stopSpeechRecognition()}>Stop Listening{transcribedText}</button>
      */}
        <fetcher.Form ref={$formref}
          method="post"
          encType="multipart/form-data"
          autoComplete="off"
          className="  form-container form-shadow">
          <div className="flex flex-row justify-center items-center object-contain gap-3 lg:gap-4 min-w-fit">
            <img
              src={ivurl}
              alt="iVoyant Logo"
              className="flex contact-logo object-contain logo-desk"
            />

<img
            src={ivurl2}
            alt="iVoyant Logo white"
            className="flex   logo-image object-contain logo-mob"
          />
          </div>

          <div>

            <div className="relative container-top">
              <input
                type="text"
                id="personname"
                name="personname"
                className="text-box text-box-container"
                value={personname}
                onChange={handlePersonNameChange}
                placeholder="Full Name*"
              />
              {nameerror && (
                <span className="error-msg text-brand-red text-[0.6rem]">{nameerror}</span>
              )}

            </div>

          </div>



          <div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="text-box text-box-container"
                placeholder="Email*"
              />
              {emailerror && (
                <span className="text-brand-red text-[0.6rem] error-msg">{emailerror}</span>
              )}


            </div>

          </div>

          <div>
            <div className="relative">
              {/* <div className="w-full text-box  "> */}
                {/* <div className="country-code items-center justify-center my-auto pt-2 cursor-pointer">
                  <Select
                    className="w-full country-text cursor-pointer"
                    // suffixIcon={countryCode == null ? <DropDownIcon /> : null}
                    onChange={handleCountryCodeChange}
                    value={countryCode}
                    options={Countries}
                    showSearch
                    placeholder="+1"
                    optionFilterProp="children"
                    onSearch={onSearch}
                    filterOption={filterOption}
                  />

                  <input
                    type="text"
                    value={countryCode}

                    className="hidden"
                    name="country_code"
                  />

                </div> */}
                <input
                  type="text"
                  placeholder="Phone Number*"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="text-box text-box-container"
                  // className="text-box-phone"
                  name="phonenumber"
                />
                {phoneerror && (
                  <span className="text-brand-red text-[0.6rem] error-msg">{phoneerror}</span>
                )}
              {/* </div> */}

            </div>

          </div>

          <div>


            <div className="relative">
              {/* <input type="reset"/> */}
              <input
                type="text"
                id="company"
                name="company"

                value={companyname}
                placeholder="Company*"
                className="text-box text-box-container"
                onChange={handleCompanyNameChange}
              />

              {companyerror && (
                <span className="text-brand-red text-[0.6rem] error-msg  ">{companyerror}</span>
              )}

            </div>

          </div>



          <div>

            <div className="relative">
              <input
                type="text"
                id="jobtitle"
                name="jobtitle"
                className="text-box text-box-container"
                placeholder="Job Title"
                value={title}
                onChange={handleTitleChange}

              />
              {titleerror && (
                <span className="text-brand-red text-[0.6rem] error-msg">{titleerror}</span>
              )}

            </div>

          </div>



          <div>
            <div className="flex flex-row justify-start items-center area-top-heading gap-2">
              <div className="flex  area-heading">
                Area of Interest
              </div>
              <div className="line" />
              <div className="flex">

                <button type="button" onClick={onCheckAll} className="select-all-btn">
                  {checkAll ? 'Deselect All' : 'Select All'}
                </button>

              </div>
            </div>


            <div className="checkbox mt-[0.75rem]">

              <Checkbox.Group style={{ width: '100%' }} value={checkedList} onChange={onChange} className="multiple-order">
                <Row gutter={[16, 16]}>
                  {plainOptions.map((option, index) => (
                    <Col key={index} span={12}>
                      <Checkbox value={option} className="checkbox-text">{option}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
              <Checkbox.Group style={{ width: '100%' }} value={checkedList} onChange={onChange} className="single-order">
                <Row gutter={[16, 16]}>
                  {plainOptions2.map((option, index) => (
                    <Col key={index} span={12}>
                      <Checkbox value={option} className="checkbox-text">{option}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
              <input
                type="text"
                value={checkedList.toString()}
                className="hidden"
                name="area_of_interests"
              />
            </div>


          </div>





          <button
            type="submit"
            name="_action"
            value="contact"

            disabled={isCreatingNewPost || !!phoneerror || !!emailerror || !!nameerror || !!titleerror || !!companyerror || email === '' || personname === '' || phoneNumber === '' || companyname === ''}
            className="submit-btn"
          >
            {isCreatingNewPost ? 'LOADING...' : 'SUBMIT'}
          </button>

        </fetcher.Form>

      </div>
    </>
  );
};
export default ContactUs;
