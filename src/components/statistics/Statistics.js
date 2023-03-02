import PropTypes from "prop-types";
import {
  Container,
  Title,
  StatisticList,
  StatisticItem,
  StattisticLabel,
  StattisticValue 
} from "../Statistics/Statistics.styled.js"

export const Statistics = ({
    title,
    stats,
}) => {
    return (
    <Container>
        {{title} && <Title>{title}</Title>}
        <StatisticList>
            {stats.map(({ id, label, percentage }) => 
          <StatisticItem key={id}>
            <StattisticLabel>{label}</StattisticLabel>
            <StattisticValue >{percentage}%</StattisticValue>
          </StatisticItem>)}
        </StatisticList>
    </Container>
    )
}

Statistics.propTypes = {    
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
  ).isRequired,
}