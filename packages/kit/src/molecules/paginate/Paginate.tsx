import React, { forwardRef, useEffect, useState } from "react";
import { Button } from "@kit";
import { Icon } from "@kit";
import { InputNumber } from "@kit";
import { Container } from "@kit";
import { Option, Select } from "@kit";
import { Box } from "@kit";
import { Text } from "@kit";

interface PaginationEvent {
  limit: number;
  skip: number;
}

interface PaginateProps {
  limit: number;
  skip: number;
  total: number;
  onChange?: (e: PaginationEvent) => void;
}

export const Paginate = forwardRef((props: PaginateProps, ref) => {
  const [page, setPage] = useState(1),
    lastPage = Math.max(Math.ceil(props.total / props.limit)),
    isFirst = page === 1,
    isLast = page === lastPage;
  useEffect(() => {
    setPage(Math.floor(props.skip / props.limit) + 1);
  }, [props]);

  function gotopage(page?: number) {
    if (!page) return;
    if (page > lastPage) page = lastPage;
    if (page < 1) page = 1;
    props.onChange?.({
      limit: props.limit,
      skip: (page - 1) * props.limit,
    });
  }

  function setlimit(limit?: number) {
    if (!limit) return;
    props.onChange?.({
      limit: limit,
      skip: 0,
    });
  }

  return (
    <Container center justify="between">
      <Box>
        <Text typo="boldText">
          Total rows: {props.total} | Rows: {props.limit} | 0 Selected
        </Text>
      </Box>
      <Box>
        <Container center gap="xxs">
        <Text padding={{ e: "s" }} typo="boldText">
          Rows per page:
        </Text>
        <Select
          value={props.limit}
          width={3}
          defaultValue={10}
          onChange={(e: any) => setlimit(e.target.value)}
        >
          <Option value={10}>
            10
          </Option>
          <Option value={20}>
            20
          </Option>
          <Option value={30}>
            30
          </Option>
          <Option value={40}>
            40
          </Option>
          <Option value={50}>
            50
          </Option>
        </Select>

        <Button
          width={2.8}
          height={2.8}
          bg="transparent"
          rounded={{ all: 'circle' }}
          disabled={isFirst}
          lvl={0}
          onClick={() => gotopage(1)}
        >
          <Icon name="PageFirst" />
        </Button>
        <Button
          width={2.8}
          height={2.8}
          bg="transparent"
          rounded={{ all: 'circle' }}
          disabled={isFirst}
          lvl={0}
          onClick={() => gotopage(page - 1)}
        >
          <Icon name="PagePrev" />
        </Button>
        <Text typo="boldText">
          Page:
        </Text>
        <InputNumber
          width={4}
          lvl={0}
          value={page}
          onChange={(e: any) => gotopage(+e.target.value)}
        />
        <Text typo="boldText">
          of {lastPage}
        </Text>
        <Button
          width={2.8}
          height={2.8}
          bg="transparent"
          rounded={{ all: 'circle' }}
          disabled={isLast}
          lvl={0}
          onClick={() => gotopage(page + 1)}
        >
          <Icon name="PageNext" />
        </Button>
        <Button
          width={2.8}
          height={2.8}
          bg="transparent"
          rounded={{ all: 'circle' }}
          disabled={isLast}
          lvl={0}
          onClick={() => gotopage(lastPage)}
        >
          <Icon name="PageLast" />
        </Button>
        </Container>
      </Box>
    </Container>
  );
});
