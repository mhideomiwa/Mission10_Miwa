import { Bowlers } from "../types/Bowlers";
import { useState, useEffect } from "react";

function BowlersComponent() { // Renamed to start with uppercase letter

    const [bowlers, setBowlers] = useState<Bowlers[]>([]);

    useEffect(() => { // Using useEffect to fetch data
        const fetchBowlers = async () => {
            try {
                const response = await fetch('http://localhost:5225/api/Bowlers');
                const data = await response.json();
                setBowlers(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBowlers(); // Call fetchBowlers function when component mounts
    }, []); // Empty dependency array means this effect runs only once on mount

    return (
        <div>
            <h4>Bowlers</h4>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Middle Initial</th>
                    <th>Last Name</th>
                    <th>Team Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Phone Number</th>
                </tr>
                </thead>
                <tbody>
                {bowlers.map((bowler) => (
                    <tr key={bowler.bowlerId}>
                        <td>{bowler.bowlerFirstName}</td>
                        <td>{bowler.bowlerMiddleInit}</td>
                        <td>{bowler.bowlerLastName}</td>
                        <td>{bowler.teamName}</td>
                        <td>{bowler.bowlerAddress}</td>
                        <td>{bowler.bowlerCity}</td>
                        <td>{bowler.bowlerState}</td>
                        <td>{bowler.bowlerZip}</td>
                        <td>{bowler.bowlerPhoneNumber}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default BowlersComponent; // Export with uppercase name
