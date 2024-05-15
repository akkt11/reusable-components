import style from './Table.module.scss'
import { TableProps } from './types/Table.types'

export const Table = <T extends { id: string | number }>({columns, data}: TableProps<T>) => {     
    return (
        <section className={style.table}>
            <div className={style.tableContainer}>
                <div className={style.tableBlock}>
                <table>
                    <thead>
                        <tr>
                            {columns.map(header => {
                                return (
                                    <th key={header.key}>{header.title}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    
                    <tbody>
                        {data.map(item => {    
                            return (
                            <tr key={item.id}>
                                {columns.map(header => {      
                                    return (
                                        <td key={header.key}>
                                            <span>{header.render ? header.render(item) : (item as any)[header.key]}</span>
                                        </td>
                                    )
                                })}
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
            </div>
        </section>
    )
}