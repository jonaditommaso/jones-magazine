import React, { useEffect, useState } from 'react';
import '../styles/hour.css';
import Spinner from 'react-bootstrap/Spinner';

const Hour = () => {
    const [hour, setHour] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    useEffect(() => {
        const updateHour = () => {
            const today = new Date();

            setHour(today.getHours().toString().padStart(2, "0"));
            setMinutes(today.getMinutes().toString().padStart(2, "0"));
            setSeconds(today.getSeconds().toString().padStart(2, "0"));
            setDay(today.getDate());
            setYear(today.getFullYear());
            const weekDay = today.getDay();
            const currentMonth = today.getMonth();

            const week = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            setDayOfWeek(week[weekDay]);
            
            const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            setMonth(months[currentMonth]);
        }
    
        setInterval(() => {
            updateHour();
        }, 1000);
    }, []);


    

    return ( 
        (hour && minutes && seconds && year && day && dayOfWeek && month) 
        ?
        <div className="hour">
            {dayOfWeek} {day} de {month} del {year}
            <br />
            {hour}:{minutes}:{seconds}
        </div>
        :
        <Spinner animation="border" variant="primary" />
    );
}
 
export default Hour;