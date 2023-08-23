import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import { usePdf } from "../../hooks/usePdf";
import { ContactProps } from "../../providers/pdfContext";
import { formatQuantity, formatToCurrency } from "../../utils/utils";
import Logo from "../../assets/logomarca-ativa-hospitalar-black.png";

export const PDFRender = () => {
  const [contactInfo, setContactInfo] = useState({} as ContactProps);
  const [list, setList] = useState([] as AtivaProductProps[]);
  const { counter, date } = usePdf();

  const total = formatToCurrency(
    list.reduce((acc, act) => acc + Number(act.valor), 0)
  );

  useEffect(() => {
    const hasList =
      Object.keys(JSON.parse(localStorage.getItem("@AtivaHospLogList")!))
        .length > 0;

    if (hasList) {
      const productList = JSON.parse(
        localStorage.getItem("@AtivaHospLogList")!
      );
      setList([...productList]);
    }

    if (localStorage.getItem("@EstimativOrc")) {
      const infos = JSON.parse(localStorage.getItem("@EstimativOrc")!);
      setContactInfo(infos);
    }
  }, []);
  return (
    <PDFViewer style={styles.document}>
      <Document style={{ margin: 0, padding: 0 }}>
        <Page size="A4" style={styles.page} wrap>
          <View>
            <Text style={styles.title}>Orçamento Estimativo</Text>
          </View>
          <View style={styles.section}>
            <div style={styles.topHeader}>
              <View>
                <Text style={styles.bold}>ATIVA MEDICO CIRÚRGICA LTDA</Text>
                <Text>CNPJ : 09.182.725/0001-12</Text>
                <Text>AV VEREADOR RAYMUNDO HARGREAVES, 98 - MILHO BRANCO </Text>
                <Text>JUIZ DE FORA - MG - 36083-770</Text>
                <Text>Tel: (32)2101-1556</Text>
              </View>
              <Image style={{ width: "140px", height: "54px" }} src={Logo} />
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
                <Text style={styles.row0}>Código</Text>
                <Text style={styles.row1}>Nome</Text>
                <Text style={styles.row2}>Apresentação</Text>
                <Text style={styles.row3}>Laboratório</Text>
                <Text style={styles.row4}>Quantidade</Text>
                <Text style={styles.row5}>Valor</Text>
              </View>
              {list.map((item, i) => {
                const quantity = formatQuantity(item.quantity);
                const price = formatToCurrency(item.valor);
                return (
                  <View key={i} style={styles.row} wrap={false}>
                    <Text style={styles.row0}>{item.id_produto}</Text>
                    <Text style={styles.row1}>{item.descricao_produto}</Text>
                    <Text style={styles.row2}>
                      {" "}
                      {item.embalagem.substring(0, 30) + "..."}
                    </Text>
                    <Text style={styles.row3}>
                      {item.fabricante.substring(0, 20) + "..."}
                    </Text>
                    <Text style={styles.row4}>{quantity}</Text>
                    <Text style={styles.row5}>{price}</Text>
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
