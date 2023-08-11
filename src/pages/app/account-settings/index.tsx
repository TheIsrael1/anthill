import Account from "components/app/account-settings/Account";
import BillingAndPlan from "components/app/account-settings/BillingAndPlan";
import Connections from "components/app/account-settings/Connections";
import Notification from "components/app/account-settings/Notification";
import Security from "components/app/account-settings/Security";
import PlanGuard from "guards/PlanGuard";
import { useState } from "react";
import Icon from "utils/Icon";



type filterTypes = 'ACCOUNT' | 'SECURITY' | 'BILLINGS AND PLANS' | 'NOTIFICATION' | 'CONNECTIONS';

interface Filter {
    name: filterTypes,
    icon: JSX.Element
}
const settingsFilters: Filter[] = [
    { name: 'ACCOUNT', icon: <Icon name='profileIcon'/> },
    { name: 'SECURITY', icon: <Icon name='padLockV2'/> },
    { name: 'BILLINGS AND PLANS', icon: <Icon name='fileIcon'/> },
    { name: 'NOTIFICATION', icon: <Icon name='notificationIcon'/> },
    { name: 'CONNECTIONS', icon: <Icon name='linkIcon'/> }
]

interface Tabs {
    title: filterTypes;
}

const DisplayTab = ({ title }: Tabs) => {
    const components: Record<filterTypes, JSX.Element> = {
        ACCOUNT: <Account />,
        SECURITY: <Security />,
        'BILLINGS AND PLANS': <BillingAndPlan />,
        NOTIFICATION: <Notification />,
        CONNECTIONS: <Connections />,
    };

    return components[title];
};


const AccountSettings = () => {
    const [currFilter, setCurrFilter] = useState<filterTypes>('ACCOUNT');

    return (
        <div className='container w-full px-container-base flex flex-col py-[1.875rem]'>
            <PlanGuard page='settings'>
                
                {/* to be refactored */}
                <div className='relative grid w-full'>
                    <div className='grid justify-start max-w-full'>
                        <div className='w-full overflow-auto no-scrollbar whitespace-nowrap flex'>
                        {settingsFilters?.map((i, idx) => (
                            <button
                            key={idx}
                            className={`${
                                i?.name === currFilter
                                ? `bg-primary-1 text-white`
                                : `bg-transparent text-secondary-2 hover:text-primary-1`
                            } flex rounded-[5px] w-max px-4 lg:px-[1.5rem]  h-[1.5rem] lg:h-[2.5rem] items-center transition-all ease-in-out`}
                            onClick={() => setCurrFilter(i?.name)}
                            >
                                <span className="mr-2">{i?.icon}</span>
                                <span className='text-[13px] lg:text-[16px] leading-[24px] tracking-[0.15px] whitespace-nowrap'>{i?.name}</span>
                            </button>
                        ))}
                        </div>
                    </div>

                    <div className="mt-7">
                        <DisplayTab title={currFilter} />
                    </div>
                    
                </div>
            </PlanGuard>
        </div>
    )
}

export default AccountSettings
