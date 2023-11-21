import {Box, Table, TableBody, TableCell, TableRow} from "@mui/material";
import {Characteristic} from "@/api/DTO/products";

interface Props {
  characteristics: Characteristic[];
}

export function Characteristics({ characteristics }: Props) {
  return (
    <Box>
      <Table size="small">
        <TableBody>
          {characteristics.map((character, index) => (
            <TableRow key={index}>
              <TableCell>{character.name}</TableCell>
              <TableCell>{character.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}