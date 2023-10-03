import { RJSFSchema } from '@rjsf/utils';
import React, { useState } from 'react';
import { Table, Thead, Tr, Th, Tbody, Td } from '../../atoms/table/Table';
import _ from 'lodash';
import { Box } from '../../atoms/box/Box';
import { Paginate } from '../../molecules/paginate/Paginate';
import { SearchBar } from '../../molecules/searchBar/SearchBar';
import { Checkbox } from '../../molecules/checkbox/Checkbox';
import { Option, Select } from '../../molecules/select/Select';
import { Container } from '../../atoms/container/Container';

type Record = { [k:string]: any } & { _id: any }
interface TableGridProps<T extends Record = Record> {
  schema: RJSFSchema
  rows: Array<T>
  label?: React.ReactNode
  renderControls?: (row: T) => React.ReactNode
}

const TableGrid = ({ schema, rows, renderControls, label }: TableGridProps) => {
  const [checklist, setChecklist] = useState<{ [k: string]: "checked" }>({}),
    toggleCheck = (id: string) => {
      if (checklist[id]) {
        setChecklist(checklist => { delete checklist[id]; return {...checklist} })
      } else {
        setChecklist({ ...checklist, [id]: "checked" })
      }
    },
    allSelected = rows.length > 0 && Object.keys(checklist).length === rows.length,
    toggleAll = () => {
      if (allSelected) {
        setChecklist({})
      } else {
        setChecklist(rows.reduce((acc, row) => ({ ...acc, [row._id.toString()]: "checked" }), {}))
      }
    }
  const args = {
    bgColor: 'active',
    bdColor: 'dark',
    design: 'strip'
  }
  return (
    <Box relative overflowY="auto">
      <Box sticky top="0" bg="white" center>
        <Box width="10%">
          {label}
        </Box>
        <Box width="80%" center>
          <Box width="50%">
            <SearchBar />
          </Box>
        </Box>
        <Box width="10%">
          <Box>
            <Select>
              <Option>
                Set Fillter
              </Option>
              <Option>
                Item
              </Option>
              <Option>
                Item
              </Option>
            </Select>
          </Box>
        </Box>
      </Box>
      <Table {...args} width="100%">
        <Thead sticky top="48px">
          <Tr>
            <Th width={1}>
              <Checkbox id="allSelected" checked={allSelected} onChange={(e) => { toggleAll() }}/>
            </Th>
            {_.keys(schema.properties).map(key => {
              const conf = schema.properties?.[key]
              return (
                <Th key={key}>{conf?.['title'] ?? _.startCase(key)}</Th>
              )
            })}
            {renderControls ? (<Th>Controls</Th>) : null}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map(row => {
            return (
              <Tr key={row._id}>
                <Th>
                  <Container center>
                    <Checkbox id={row._id} checked={!!checklist[row._id]} onChange={(e) => { toggleCheck(row._id) }}/>
                  </Container>
                </Th>
                {_.keys(schema.properties).map((key, index) => {
                  const conf = schema.properties?.[key],
                    cellId = `${row._id}_${key}`,
                    value = row[key] ?? '-'
                  return index === 0 ? (
                    <Th key={cellId}>{value}</Th>
                  ) : (
                    <Td key={cellId}>{value}</Td>
                  )
                })}
                {renderControls ? (<Td>{renderControls(row)}</Td>) : null}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
      <Box sticky bottom="0" padding={{ all: "m" }} bg="white">
        <Paginate total={rows.length} skip={0} limit={10} />
      </Box>
    </Box>
  )
}



export default TableGrid;