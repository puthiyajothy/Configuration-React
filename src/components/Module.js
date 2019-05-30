import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Menu, Dropdown, Button, Icon, Row, Col, Modal, Select } from 'antd';
import '../index.css';

export default class Module extends Component {
    state = { visible: false };

	showModal = () => {
		this.setState({
			visible: true
		});
	};

	handleOk = (e) => {
		console.log(e);
		this.setState({
			visible: false
		});
	};

	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false
		});
	};
    render() {
        const { Option } = Select;
        return (
            <div>

				<Row>
					<Col
						span={12}
						style={{ border: '1px solid #d9d9d9', borderRadius: '5px', margin: '20px 20px 20px 20px ' }}
					>
						<Row>
							<Col span={3} id="configDiv">
                            Module
							</Col>
						</Row>
						<Row style={{ marginBottom: '20px' }}>
							<Col span={4} id="font">
							</Col>
							<Col span={12}>
							<Input placeholder="Add New Modules" />
							</Col>
							<Col span={1} />
							<Col span={6}>
								<Button onClick={this.showModal}>
									{' '}
									<Icon type="plus-circle" theme="twoTone" /> Add
								</Button>
							</Col>
						</Row>
					</Col>
				</Row>
            </div>
        )
    }
}
