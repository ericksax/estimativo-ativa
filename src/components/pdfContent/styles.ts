import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: '18px',
    textAlign: 'center',
  },

  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    margin: 0,
    paddingTop: 35,
    paddingBottom: 85,
    paddingHorizontal: 25,
  },

  section: {
    margin: 10,
    padding: 10,
    fontSize: '10px',
  },

  document: {
    width: '99.8%',
    height: '97.5vh',
  },

  table: {
    width: '100%',
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    borderTop: '1px solid #000',
    paddingTop: 4,
    paddingBottom: 4,
    height: '16px',
    fontSize: 6,
    paddingHorizontal: 4
  },

  header: {
    borderTop: 'none',
    fontSize: '6px',
    backgroundColor: '#c4c4c4',
    paddingHorizontal: 4,
    marginBottom: 1
  },

  subHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '8px',
    padding: '10px',
    marginLeft: '10px',
    marginRight: '10px',
  },

  subHeader_info: {
    marginRight: '20px',
    marginLeft: '20px',
    fontSize: '8px',
  },

  flex_between: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 10
  },

  topHeader: {
    border: '1px solid #000',
    width: '100%',
    height: '100px',
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },

  bold: {
    fontWeight: 'bold',
  },

  row0: {
    width: '10%',
  },

  row1: {
    width: '25%',
  },

  row2: {
    width: '30%',
  },

  row3: {
    width: '15%',
  },

  row4: {
    display: 'flex',
    width: '10%',
    textAlign: 'center'
  },

  row5: {
    width: '10%',
    textAlign: 'right',
  },

  total: {
    fontSize: '8px',
    textAlign: 'right',
    marginRight: 20
  },

  footer: {
    position: 'absolute',
    bottom: '30px',
    left: 0,
    display: 'flex',
    gap: 8,
    right: 0,
    textAlign: 'center',
    fontSize: 6,
  }
})