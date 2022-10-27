import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';

import {style} from './style';
import {PDFfile} from '../components/Temp';

const Invoice = (props: any) => {
  console.log(props.route.params);

  const printHTML = async () => {
    await RNPrint.print({
      html: '<h1>Here will be Heading 1</h1><h2>Here will be Heading 2</h2><h3>Here will be Heading 3</h3>',
    });
  };

  const printPDF = async () => {
    let Html = PDFfile(
      'sai',
      'Hyderabad',
      '000000000',
      5,
      '12345',
      'Electronic',
    );
    const results: any = await RNHTMLtoPDF.convert({
      html: Html,
      fileName: 'test',
      base64: true,
    });
    await RNPrint.print({filePath: results.filePath});
  };

  return (
    <View>
      <View style={{backgroundColor: '#009387', padding: 10,alignItems:'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Invoive Screen</Text>
      </View>
      <View
        style={{
          margin: 20,
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: '800',
            fontSize: 20,
            paddingBottom: 10,
          }}>
          Total Price :
        </Text>
        <Text style={{color: 'black', fontWeight: '800', fontSize: 20}}>
          {JSON.stringify(props.route.params.Price)}
        </Text>
      </View>
      <TouchableOpacity style={style.container}>
        <Text onPress={() => printPDF()}>Print Invoice</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Invoice;
