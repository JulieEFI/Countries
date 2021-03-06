import React from "react";
import { useNavigate } from "react-router";

import { Country } from "../../common/interfaces/country.interface";
import { Button, Input, Spin, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { SearchOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;

interface CountriesGridProps {
  countries: Country[];
}

const CountriesGrid: React.FC<CountriesGridProps> = ({
  countries,
}: CountriesGridProps) => {
    const navigate = useNavigate();

    const goToHomePage = () => {
      navigate(`/`);
    };
  const searchInputHolder: { current: Input | null } = { current: null };

  const columns: ColumnsType<Country> = [
    {
      key: "name",
      title: "Code",
      dataIndex: "code",
      filters: [
        {
          text: "CH",
          value: "CH",
        },
        {
          text: "US",
          value: "US",
        },
        {
          text: "BY",
          value: "BY",
        },
        {
          text: "RU",
          value: "RU",
        },
        {
          text: "FR",
          value: "FR",
        },
      ],
      onFilter: (value: any, record: any) => record?.code?.startsWith(value),
      filterSearch: true,
      sorter: (a, b) => {
        if (a.code < b.code) return -1;
        if (a.code > b.code) return 1;
        return 0;
      },
      sortDirections: ["descend"],
    },
    {
      key: "name",
      title: "Country",
      dataIndex: "name",
      filters: [
        {
          text: "France",
          value: "France",
        },
        {
          text: "Russia",
          value: "Russia",
        },
        {
          text: "Belarus",
          value: "Belarus",
        },
        {
          text: "China",
          value: "China",
        },
        {
          text: "Germany",
          value: "Germany",
        },
      ],
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={(node) => {
              searchInputHolder.current = node;
            }}
            placeholder="Search Country"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            icon={<SearchOutlined />}
            size="small"
          >
            Search
          </Button>
          <Button onClick={clearFilters}>Reset</Button>
        </div>
      ),
      filterIcon: () => {
        return <SearchOutlined></SearchOutlined>;
      },
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInputHolder.current?.select());
        }
      },
      onFilter: (value: any, record: any) => {
        return record?.name?.toLowerCase().includes(value.toLowerCase());
      },
      sorter: (a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      },
      sortDirections: ["descend"],
    },

    {
      key: "name",
      title: "Flag",
      dataIndex: "emoji",
      sorter: (a, b) => {
        if (a.emoji < b.emoji) return -1;
        if (a.emoji > b.emoji) return 1;
        return 0;
      },
      sortDirections: ["descend"],
    },
    {
      key: "name",
      title: "Capital",
      dataIndex: "capital",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={(node) => {
              searchInputHolder.current = node;
            }}
            placeholder="Search capital"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            icon={<SearchOutlined />}
            size="small"
          >
            Search
          </Button>
          <Button onClick={clearFilters}>Reset</Button>
        </div>
      ),
      filterIcon: () => {
        return <SearchOutlined></SearchOutlined>;
      },
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInputHolder.current?.select());
        }
      },
      onFilter: (value: any, record: any) => {
        return record?.capital?.toLowerCase().includes(value.toLowerCase());
      },
      sorter: (a, b) => {
        if (a.capital < b.capital) return -1;
        if (a.capital > b.capital) return 1;
        return 0;
      },
      sortDirections: ["descend"],
    },

    {
      key: "name",
      title: "Continent",
      dataIndex: ["continent", "name"],
      filters: [
        {
          text: "Europe",
          value: "Europe",
        },
        {
          text: "Asia",
          value: "Asia",
        },
        {
          text: "Africa",
          value: "Africa",
        },
        {
          text: "North America",
          value: "North America",
        },
        {
          text: "South America",
          value: "South America",
        },
        {
          text: "Oceania",
          value: "Oceania",
        },
      ],
      onFilter: (value: any, record: any) =>
        record?.continent?.name?.startsWith(value),
      filterSearch: true,
      sorter: (a, b) => {
        if (a.continent.name < b.continent.name) return -1;
        if (a.continent.name > b.continent.name) return 1;
        return 0;
      },
      sortDirections: ["descend"],
    },
  ];

  return (
    <div className="table">
      {countries.length > 0 ? (
        <>
          <Title level={1}>Info about countries</Title>
          <Table<Country>
            rowKey="name"
            columns={columns}
            dataSource={countries}
            size="large"
            bordered
          />
          <div className="table__button">
            <Button
              type="primary"
              shape="default"
              size="large"
              onClick={goToHomePage}
            >
              Go Back
            </Button>
          </div>
        </>
      ) : (
        <>
          {" "}
          <Spin className="table__loading" tip="Loading..."></Spin>
        </>
      )}
    </div>
  );
};

export default CountriesGrid;
