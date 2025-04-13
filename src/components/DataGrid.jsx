import { useContext, useState, useEffect } from "react";
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import deleteIcon from "../assets/svg/delete-icon.svg";
import "./dataGrid.css";

const DataGrid = () => {
    const { user, setUser } = useContext(AuthContext);
    const [wishlistItems, setWishlistItems] = useState([]);
    const columns = [
        { field: 'title', headerName: 'Produit', width: "400px" , align: "start"},
        { field: 'prix', headerName: 'Prix', width: '180px', align: "center"},
        { field: 'date', headerName: 'Ajouté à', width: "180px", align: "center"},
        { field: 'status', headerName: 'Status',options: {0: '#48BB78',1: '#4d7fb9',2:'#d84e4e'}, width: '150px', align: "center"},
        { field: 'addtocart', headerName: '', width: '200px', align: "center"},
        { field: 'delete', headerName: '', width: '100px', align: "center"},
    ];
    
    const renderRow = (product) => {
        return (
            <div className="data-grid-row" key={product.PRD_ID}>
                <div className="data-grid-cell" style={{ width: columns[0].width ,justifyContent: columns[0].align}}>
                    <img src={product.PRIMARY_IMAGE_URL} alt={product.PRD_NAME} width="100" />
                    <span>{product.PRD_NAME}</span>
                </div>
                <div className="data-grid-cell" style={{ width: columns[1].width ,justifyContent: columns[1].align }}>
                    <span>{product.MIN_PRICE} DT</span>
                </div>
                <div className="data-grid-cell" style={{ width: columns[2].width ,justifyContent: columns[2].align }}>
                    <span>{product.WISH_DATE}</span>
                </div>
                <div className="data-grid-cell" style={{ width: columns[3].width ,justifyContent: columns[3].align }}>
                    <span className="data-grid-status" style={{ backgroundColor: columns[3].options[product.STOCK] }}>{product.STOCK === '2' ? "Hors Stock" :product.STOCK === '1' ? "En Arrivage":"En Stock"}</span>
                </div>
                <div className="data-grid-cell" style={{ width: columns[4].width ,justifyContent: columns[4].align}}>
                    <button className="data-grid-add-button">AJOUTER AU PANIER</button>
                </div>
                <div className="data-grid-cell" style={{ width: columns[5].width ,justifyContent: columns[5].align}}>
                    <button className="data-grid-delete-button">
                        <img src={deleteIcon} alt="Delete" />
                    </button>
                </div>
            </div>
        );
    };
    

    useEffect(() => {
        const fetchWishlistItems = async () => {
            try {
                const fetched = await Promise.all(
                    user.wishlist.map(async (item) => {
                        const data = new FormData();
                        data.append('id', item.PRD_ID);
                        const response = await axios.post('http://localhost/productBasic.php', data );
                        //console.log(response.data);
                        const product = response.data?.[0];
                        return product ? { ...product, WISH_DATE: item.WISH_DATE } : null;
                    })
                );
                setWishlistItems(fetched.filter(Boolean));
            } catch (error) {
                console.error("Error fetching wishlist products:", error);
            }
        };
        if(user?.wishlist?.length){
            //console.log(user.wishlist);
            fetchWishlistItems();
        }
        
    }, []);

    /*
    useEffect(() => {
        console.log("Updated wishlistItems:", wishlistItems);
    }, [wishlistItems]);
    */
    return (
        <div className="data-grid">
            <div className="data-grid-header">
                {columns.map((column, index) => (
                    <div
                        className="data-grid-header-cell"
                        style={{ width: column.width ,justifyContent: column.align}}
                        key={column.field}
                    >
                        <span>{column.headerName}</span>
                    </div>
                ))}
            </div>
            <div className="data-grid-rows-wrapper">
                {
                wishlistItems.length? wishlistItems.map((item, index) => renderRow(item))
                :user? <div className="data-grid-empty">Aucun produit dans la liste de souhaits.</div>
                : <div className="data-grid-empty">Veuillez vous connecter pour voir vos produits.</div>
                }
            </div>
        </div>
    );
};

export default DataGrid;