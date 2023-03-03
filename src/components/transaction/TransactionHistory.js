import PropTypes from "prop-types";
import {
    Table,
    TableHead,
    HeadRow,
    HeadCell,
    TableBody,
    BodyRow,
    BodyCell
} from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <TableHead>
                <HeadRow>
                    <HeadCell>Type</HeadCell>
                    <HeadCell>Amount</HeadCell>
                    <HeadCell>Currency</HeadCell>
                </HeadRow>
            </TableHead>
            <TableBody>
                {items.map(({ id, type, amount, currency }) =>
                    <BodyRow key={id}>
                        <BodyCell>{type}</BodyCell>
                        <BodyCell>{amount}</BodyCell>
                        <BodyCell>{currency}</BodyCell>
                    </BodyRow>
                )}
            </TableBody>
        </Table>
    )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};