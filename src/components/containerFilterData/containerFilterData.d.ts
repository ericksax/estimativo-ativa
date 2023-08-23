interface ContainerFilterDataProps {
  filteredData: AtivaProductProps[];
  searchTerm: string;
  addItemToTable: (item: AtivaProductProps) => void;
}
