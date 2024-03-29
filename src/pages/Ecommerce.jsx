/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/button-has-type */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';
import nft from '../images/nft-img.png';
import { Stacked, Pie, Button, LineChart, SparkLine, Header } from '../components';
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
  employeesData,
  employeesGrid,
} from '../data/dummy';

import { useStateContext } from '../contexts/ContextProvider';

const DropDown = ({ currentMode }) => (
	<div className="w-28 border-1 border-color px-2 py-1 rounded-md">
		<DropDownListComponent
  id="time"
  fields={{ text: 'Time', value: 'Id' }}
  style={{ border: 'none', color: currentMode === 'Dark' && 'white' }}
  value="1"
  dataSource={dropdownData}
  popupHeight="220px"
  popupWidth="120px"
		/>
	</div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  const toolbarOptions = ['Search'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
		<div className="mt-14">
			<h2 className="text-white ml-7 mb-7">NFTS FOR APPROVALS</h2>
			<div className="flex flex-wrap ml-7 ">
				<div className="grid grid-cols-4 gap-4">
					<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 rounded-2xl ">
						<img src={nft} className="br-10 rounded-2xl mb-2" alt="Logo" />
						<h3 className="px-3 ">#1234</h3>
						<div className="flex flex-wrap mx-2 my-1">
							<h1 className="flex-auto text-lg font-semibold text-slate-400">Title</h1>
							<div className="text-lg font-semibold text-slate-500">$110.00</div>
						</div>
						<button className="rounded-full m-2 px-3 py-1 bg-red-700">approve</button>

					</div>

					<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 rounded-2xl ">
						<img src={nft} className="br-10 rounded-2xl mb-2" alt="Logo" />
						<h3 className="px-3 ">#1234</h3>
						<div className="flex flex-wrap mx-2 my-1">
							<h1 className="flex-auto text-lg font-semibold text-slate-400">Title</h1>
							<div className="text-lg font-semibold text-slate-500">$110.00</div>
						</div>
						<button className="rounded-full m-2 px-3 py-1 bg-red-700">approve</button>

					</div>

					<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 rounded-2xl ">
						<img src={nft} className="br-10 rounded-2xl mb-2" alt="Logo" />
						<h3 className="px-3 ">#1234</h3>
						<div className="flex flex-wrap mx-2 my-1">
							<h1 className="flex-auto text-lg font-semibold text-slate-400">Title</h1>
							<div className="text-lg font-semibold text-slate-500">$110.00</div>
						</div>
						<button className="rounded-full m-2 px-3 py-1 bg-red-700">approve</button>

					</div>

					<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 rounded-2xl ">
						<img src={nft} className="br-10 rounded-2xl mb-2" alt="Logo" />
						<h3 className="px-3 ">#1234</h3>
						<div className="flex flex-wrap mx-2 my-1">
							<h1 className="flex-auto text-lg font-semibold text-slate-400">Title</h1>
							<div className="text-lg font-semibold text-slate-500">$110.00</div>
						</div>
						<button className="rounded-full m-2 px-3 py-1 bg-red-700">approve</button>

					</div>

					<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 rounded-2xl ">
						<img src={nft} className="br-10 rounded-2xl mb-2" alt="Logo" />
						<h3 className="ml-2">skilo 123</h3>
						<div className="flex flex-wrap ml-2 mr-2">
							<h1 className="flex-auto text-lg font-semibold text-slate-900">Classic</h1>
							<div className="text-lg font-semibold text-slate-500">$110.00</div>
						</div>
					</div>
				</div>
			</div>

			<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
				<Header category="Recent History" />
				<GridComponent
  className="dark:text-gray-200 dark:bg-secondary-dark-bg"
  dataSource={employeesData}
  width="auto"
  allowPaging
  allowSorting
  pageSettings={{ pageCount: 5 }}
  editSettings={editing}
  toolbar={toolbarOptions}
				>
					<ColumnsDirective>
						{/* eslint-disable-next-line react/jsx-props-no-spreading */}
						{employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
					</ColumnsDirective>
					<Inject services={[Search, Page]} />
				</GridComponent>
			</div>

			<div className="flex flex-wrap  justify-center dark:text-gray-200 dark:bg-secondary-dark-bg">
				<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
					<div className="flex justify-between items-center">
						<div>
							<p className="font-bold text-gray-400">Earnings</p>
							<p className="text-2xl">$63,448.78</p>
						</div>
						<button
  type="button"
  style={{ backgroundColor: currentColor }}
  className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
						>
							<BsCurrencyDollar />
						</button>
					</div>
					<div className="mt-6">
						<Button color="white" bgColor={currentColor} text="Download" borderRadius="10px" />
					</div>
				</div>
				<div className="flex m-3 flex-wrap justify-center gap-5 items-center">
					{earningData.map((item) => (
						<div
  key={item.title}
  className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
						>
							<button
  type="button"
  style={{ color: item.iconColor, backgroundColor: item.iconBg }}
  className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
							>
								{item.icon}
							</button>
							<p className="mt-3">
								<span className="text-lg font-semibold">{item.amount}</span>
								<span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
							</p>
							<p className="text-sm text-gray-400  mt-1">{item.title}</p>
						</div>
					))}
				</div>
			</div>

			<div className="flex gap-10 flex-wrap justify-center">
				<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-full">
					<div className="flex justify-between">
						<p className="font-semibold text-xl">Revenue Updates</p>
						<div className="flex items-center gap-4">
							<p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
								<span>
									<GoPrimitiveDot />
								</span>
								<span>Expense</span>
							</p>
							<p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
								<span>
									<GoPrimitiveDot />
								</span>
								<span>Budget</span>
							</p>
						</div>
					</div>
					<div className="mt-10 flex gap-10 flex-wrap justify-center">
						<div className=" border-r-1 border-color m-4 pr-10">
							<div>
								<p>
									<span className="text-3xl font-semibold">$93,438</span>
									<span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
										23%
									</span>
								</p>
								<p className="text-gray-500 mt-1">Budget</p>
							</div>
							<div className="mt-8">
								<p className="text-3xl font-semibold">$48,487</p>

								<p className="text-gray-500 mt-1">Expense</p>
							</div>

							<div className="mt-5">
								<SparkLine
  currentColor={currentColor}
  id="line-sparkLine"
  type="Line"
  height="80px"
  width="250px"
  data={SparklineAreaData}
  color={currentColor}
								/>
							</div>
							<div className="mt-10">
								<Button
  color="white"
  bgColor={currentColor}
  text="Download Report"
  borderRadius="10px"
								/>
							</div>
						</div>
						<div>
							<Stacked currentMode={currentMode} width="320px" height="360px" />
						</div>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<div className=" rounded-2xl w-full p-4 m-3" style={{ backgroundColor: currentColor }}>
							<div className="flex justify-between items-center ">
								<p className="font-semibold text-white text-2xl">Earnings</p>

								<div>
									<p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>
									<p className="text-gray-200">Monthly revenue</p>
								</div>
							</div>

							<div className="mt-4">
								<SparkLine
  currentColor={currentColor}
  id="column-sparkLine"
  height="100px"
  type="Column"
  data={SparklineAreaData}
  width="320"
  color="rgb(242, 252, 253)"
								/>
							</div>
						</div>
					</div>
					<div>
						<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl w-full  p-8 m-3 flex justify-center items-center gap-10">
							<div>
								<p className="text-2xl font-semibold ">$43,246</p>
								<p className="text-gray-400">Yearly sales</p>
							</div>

							<div className="w-40">
								<Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4 flex gap-10 m-4 flex-wrap justify-center">
				<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
					<div className="flex justify-between items-center gap-2">
						<p className="text-xl font-semibold">Recent Transactions</p>
						<DropDown currentMode={currentMode} />
					</div>
					<div className="mt-10 w-72 md:w-400">
						{recentTransactions.map((item) => (
							<div key={item.title} className="flex justify-between mt-4">
								<div className="flex gap-4">
									<button
  type="button"
  style={{
										  color: item.iconColor,
										  backgroundColor: item.iconBg,
  }}
  className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
									>
										{item.icon}
									</button>
									<div>
										<p className="text-md font-semibold">{item.title}</p>
										<p className="text-sm text-gray-400">{item.desc}</p>
									</div>
								</div>
								<p className={`text-${item.pcColor}`}>{item.amount}</p>
							</div>
						))}
					</div>
					<div className="flex justify-between items-center mt-5 border-t-1 border-color">
						<div className="mt-3">
							<Button color="white" bgColor={currentColor} text="Add" borderRadius="10px" />
						</div>

						<p className="text-gray-400 text-sm">36 Recent Transactions</p>
					</div>
				</div>
				<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-100">
					<div className="flex justify-between items-center gap-2 mb-10">
						<p className="text-xl font-semibold">Sales Overview</p>
						<DropDown currentMode={currentMode} />
					</div>
					<div className="md:w-full overflow-auto">
						<LineChart />
					</div>
				</div>
			</div>

			<div className="flex flex-wrap justify-center">
				<div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
					<div className="flex justify-between">
						<p className="text-xl font-semibold">Weekly Stats</p>
						<button type="button" className="text-xl font-semibold text-gray-500">
							<IoIosMore />
						</button>
					</div>

					<div className="mt-10 ">
						{weeklyStats.map((item) => (
							<div key={item.title} className="flex justify-between mt-4 w-full">
								<div className="flex gap-4">
									<button
  type="button"
  style={{ background: item.iconBg }}
  className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
									>
										{item.icon}
									</button>
									<div>
										<p className="text-md font-semibold">{item.title}</p>
										<p className="text-sm text-gray-400">{item.desc}</p>
									</div>
								</div>

								<p className={`text-${item.pcColor}`}>{item.amount}</p>
							</div>
						))}
						<div className="mt-4">
							<SparkLine
  currentColor={currentColor}
  id="area-sparkLine"
  height="160px"
  type="Area"
  data={SparklineAreaData}
  width="320"
  color="rgb(242, 252, 253)"
							/>
						</div>
					</div>
				</div>
				<div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
					<div className="flex justify-between">
						<p className="text-xl font-semibold">MedicalPro Branding</p>
						<button type="button" className="text-xl font-semibold text-gray-400">
							<IoIosMore />
						</button>
					</div>
					<p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
						16 APR, 2021
					</p>

					<div className="flex gap-4 border-b-1 border-color mt-6">
						{medicalproBranding.data.map((item) => (
							<div key={item.title} className="border-r-1 border-color pr-4 pb-2">
								<p className="text-xs text-gray-400">{item.title}</p>
								<p className="text-sm">{item.desc}</p>
							</div>
						))}
					</div>
					<div className="border-b-1 border-color pb-4 mt-2">
						<p className="text-md font-semibold mb-2">Teams</p>

						<div className="flex gap-4">
							{medicalproBranding.teams.map((item) => (
								<p
  key={item.name}
  style={{ background: item.color }}
  className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
								>
									{item.name}
								</p>
							))}
						</div>
					</div>
					<div className="mt-2">
						<p className="text-md font-semibold mb-2">Leaders</p>
						<div className="flex gap-4">
							{medicalproBranding.leaders.map((item, index) => (
								<img key={index} className="rounded-full w-8 h-8" src={item.image} alt="" />
							))}
						</div>
					</div>
					<div className="flex justify-between items-center mt-5 border-t-1 border-color">
						<div className="mt-3">
							<Button color="white" bgColor={currentColor} text="Add" borderRadius="10px" />
						</div>

						<p className="text-gray-400 text-sm">36 Recent Transactions</p>
					</div>
				</div>
			</div>
		</div>
  );
};

export default Ecommerce;
