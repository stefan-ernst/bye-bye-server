import ExternalLink from "./ExternalLink";

export default function Features({list}) {

    const {hosting,license,link,marketplace,subscription} = list;
    return (
        <>
        <ul className={'features'}>
            <li className={'item'}>Hosting: {hosting}</li>
            <li className={'item'}>Link: <ExternalLink url={link}>Website</ExternalLink></li>
            <li className={'item'}>License: {license}</li>
            <li className={'item'}>Marketplace: {marketplace}</li>
            <li className={'item'}>Subscription: {subscription}</li>
        </ul>
        </>
    )
}