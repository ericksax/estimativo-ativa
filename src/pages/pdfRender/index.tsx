import { Page, Text, View, Document, PDFViewer,  } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { formatToCurrency } from "../../utils/utils";
import { styles } from "./styles";

const initialState = {
  name: '',
  contact: '',
  cnpj: '',
  adress: ''
}

export const PDFRender = () => {
  const [list, setList] = useState([] as any[]);
  const [contactInfo, setContactInfo] = useState(initialState) 

  const date = new Date().toLocaleDateString("pt-br");
  const total = formatToCurrency(
    list.reduce((acc, act) => acc + act["PF Sem Impostos"], 0)
  );
  const counter = new Date().getTime().toString().substring(7);

  useEffect(() => {
    const hasList = Object.keys(JSON.parse(localStorage.getItem("@AtivaHospLogList")!)).length > 0

    if(hasList) {
      const productList = JSON.parse(localStorage.getItem("@AtivaHospLogList")!);
      setList([...productList]);

    }

    if(localStorage.getItem('@EstimativOrc')) {
      const infos = JSON.parse(localStorage.getItem('@EstimativOrc')!) ;
      setContactInfo(infos)
    }
  }, []);

  return (
    <PDFViewer style={styles.document}>
      <Document>
        <Page size="A4" style={styles.page} wrap>
          <View style={styles.section}>
            <div style={styles.topHeader}>
              <Text style={styles.bold}>ATIVA MEDICO CIRURGICA LTDA</Text>
              <Text>CNPJ : 09.182.725/0001-12</Text>
              <Text>AV VEREADOR RAYMUNDO HARGREAVES, 98 - MILHO BRANCO </Text>
              <Text>JUIZ DE FORA - MG - 36083-770</Text>
              <Text>Tel: (32)2101-1556</Text>
            </div>
          </View>
          <View>
            <div style={styles.subHeader}>
              <Text>Número do pedido:{" " + counter}</Text>
              <Text>Data: {date}</Text>
            </div>
            <div style={styles.flex_between}>
              <Text style={styles.subHeader_info}>
                Cliente: {contactInfo.name}
              </Text>
              <Text style={styles.subHeader_info}>
                Endereço: {contactInfo.adress}
              </Text>
              <Text style={styles.subHeader_info}>
                CNPJ: {contactInfo.cnpj}
              </Text>
            </div>
            <Text style={styles.subHeader}>Contato: {contactInfo.contact}</Text>
          </View>
          <View style={styles.section}>
            <View style={styles.table}>
              <View style={[styles.row, styles.bold, styles.header]}>
                <Text style={styles.row0}>Sequencia</Text>
                <Text style={styles.row1}>Nome</Text>
                <Text style={styles.row2}>Apresentação</Text>
                <Text style={styles.row3}>Laboratório</Text>
                <Text style={styles.row4}>Quantidade</Text>
                <Text style={styles.row5}>Valor</Text>
              </View>
              {list.map((item, i) => {
                const numItem = i + 1;
                return (
                  <View key={i} style={styles.row} wrap={false}>
                    <Text style={styles.row0}>{numItem}</Text>
                    <Text style={styles.row1}>{item.PRODUTO}</Text>
                    <Text style={styles.row2}>
                      {" "}
                      {item.APRESENTAÇÃO.substring(0, 30) + "..."}
                    </Text>
                    <Text style={styles.row3}>
                      {item.LABORATÓRIO.substring(0, 20) + "..."}
                    </Text>
                    <Text style={styles.row4}>{item.quantity}</Text>
                    <Text style={styles.row5}>{(item["PF Sem Impostos"]).toFixed(2)}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View>
            <Text style={styles.total}>Total: {total}</Text>
          </View>
            <View fixed style={styles.footer}>
              <Text fixed>
                _______________________________________________________________________________________________________________________________
              </Text>
              <Text fixed>Orçamento Estimativo válido por 10 dias</Text>
              <Text fixed>
                ATIVA MÉDICO CIRÚRGICA - AV VEREADOR RAYMUNDO HARGREAVES, 98 -
                MILHO BRANCO JUIZ DE FORA - MG - 36083-770
              </Text>
            </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
