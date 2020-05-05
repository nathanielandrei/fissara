import React, { useEffect, useState } from 'react';
import { ListGroup, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from './../../redux/actions/list/index';
import styles from './List.module.css';

const List = (props) => {
    const list = useSelector(state => state.listReducer.list);
    const [searchText, setSearchText] = useState("");
    const [employeeListOnStage, setEmployeeListOnStage] = useState(list);
    const dispatch =  useDispatch();

    useEffect(() => {
        dispatch(getList());
    }, [dispatch]);

    useEffect(() => {
        setEmployeeListOnStage(list);
    }, [list]);

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchText(value);
        const searchCollection = searchValue(list, value);
        console.log(searchCollection);
        value.length > 0 ? setEmployeeListOnStage(searchCollection) : setEmployeeListOnStage(list);
    }

    const searchValue = (array, searchText) => {
        return array.filter(object => {
          const result = object.employee_name.toLowerCase().search(searchText.toLowerCase());
          if (result !== -1) {
            return object;
          }
      
          return null;
        });
    };

    

    return (
        <div>
            <Form>
                <Form.Control 
                    autoComplete="off"
                    value={searchText}
                    onChange={e => handleSearch(e)}
                    placeholder="Search Employee name"/>
            </Form>
            <ListGroup className={styles.listGroup}>
                { employeeListOnStage ? employeeListOnStage.map((data, index) => {
                    return (
                        <ListGroup.Item
                          key={index}>
                          {data.employee_name}
                        </ListGroup.Item>
                      );
                }) : null }
            </ListGroup>
        </div>
    );
}

export { List };