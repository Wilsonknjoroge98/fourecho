import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pdf, setPdf] = useState(null);
  const [base64Pdf, setBase64Pdf] = useState(null);
  const [discrepanciesList, setDiscrepanciesList] = useState([]);
  const [backgroundValues, setBackgroundValues] = useState([]);
  const [inspectionTypeOther, setInspectionTypeOther] = useState(false);
  const [inspectionTypeOtherText, setInspectionTypeOtherText] = useState('');
  const [validEmailPIC, setValidEmailPIC] = useState(false);
  const [validEmailInspector, setValidEmailInspector] = useState(false);
  const [tempValues, setTempValues] = useState([{}]);
  const [sanitizingConcentrationValues, setSanitizingConcentrationValues] =
    useState([{}]);
  const [sanitizingTempValues, setSanitizingTempValues] = useState([{}]);
  const [tempArr, setTempArr] = useState(Array.from(Array(3).keys()));
  const [itemGroup, setItemGroup] = useState();
  const [itemId, setItemId] = useState('');
  const [filterLoading, setFilterLoading] = useState(false);
  const [discrepancy, setDiscrepancy] = useState({});
  const [discrepancyModalVisible, setDiscrepancyModalVisible] = useState(false);
  const [nanoModalVisible, setNanoModalVisible] = useState(false);
  const [nanoInfo, setNanoInfo] = useState(false);
  const [iHH, setIHH] = useState('');
  const [startTime, setStartTime] = useState('');
  const [inspectorSignature, setInspectorSignature] = useState(null);
  const [picSignature, setPICSignature] = useState(null);
  const [freeText, setFreeText] = useState('');
  const [nanoValues, setNanoValues] = useState([]);

  return (
    <AppContext.Provider
      value={{
        pdf,
        setPdf,
        base64Pdf,
        setBase64Pdf,
        iHH,
        setIHH,
        startTime,
        setStartTime,
        discrepanciesList,
        setDiscrepanciesList,
        backgroundValues,
        setBackgroundValues,
        inspectionTypeOther,
        setInspectionTypeOther,
        inspectionTypeOtherText,
        setInspectionTypeOtherText,
        validEmailInspector,
        validEmailPIC,
        setValidEmailInspector,
        setValidEmailPIC,
        sanitizingConcentrationValues,
        setSanitizingConcentrationValues,
        sanitizingTempValues,
        setSanitizingTempValues,
        tempValues,
        setTempValues,
        tempArr,
        setTempArr,
        itemGroup,
        setItemGroup,
        itemId,
        setItemId,
        filterLoading,
        setFilterLoading,
        discrepancy,
        setDiscrepancy,
        discrepancyModalVisible,
        setDiscrepancyModalVisible,
        inspectorSignature,
        setInspectorSignature,
        picSignature,
        setPICSignature,
        freeText,
        setFreeText,
        nanoValues,
        setNanoValues,
        nanoModalVisible,
        setNanoModalVisible,
        nanoInfo,
        setNanoInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
