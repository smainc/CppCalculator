import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Input = styled.input`
    width: 100%;
    height: 10vh;
    border-radius: 10px;
    Background-color: #aaa;
    border: none;
`;
const Table = styled.table`
    width: 40vw;
    height: 10vh;
    border: 1px solid #000;
`;
const TableRow = styled.tr`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const TableData = styled.td`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Button = styled.button`
    height: 100px;
    width: 100%;
    margin: 4px;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
    content: ${props => props.text};
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.05);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
    }
    &:active {
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: none;
        transform: scale(1);
    }
`;
const CalculatorPanel = () => {
    //All buttons in the calculator
    const buttons = [
        ['C', 'DEL', '%', '/'],
        [7, 8, 9, '*'],
        [4, 5, 6, '-'],
        [1, 2, 3, '+'],
        [0, '.', '=', 'ANS']
    ];

    

  return (
    <Container>
        <Wrapper>
            <Table>
                <tbody>
                    <TableRow>
                        <TableData colSpan="4">
                            <Input type="text" />
                        </TableData>
                    </TableRow>
                    {buttons.map((row, index) => {
                        return (
                            <TableRow key={index}>
                                {row.map((button, index) => {
                                    return (
                                        <TableData key={index}>
                                            <Button text={button}>{button}</Button>
                                        </TableData>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </tbody>
            </Table>
        </Wrapper>
    </Container>
  )
}

export default CalculatorPanel