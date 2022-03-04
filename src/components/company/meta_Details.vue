<template>
          <div class="usrInfo">
            <ul class="info">
                <li>USER INFORMATION</li>
                <li>Xyz@Gmail.Com</li>
                <li>+9717312897319</li>
            </ul>
        </div>
        <div class="accounts">
            <ul class="acc">
                <li>LINKED ACCOUNTS</li>
                <li>
                    <span>Google</span>
                    <font-awesome-icon icon="check" class="active"/>
                </li>
                <li>
                    <span>Phone Number</span>
                    <font-awesome-icon icon="check" class="active"/>
                </li>
                <li>
                    <span>Email</span>
                    <font-awesome-icon icon="check" />
                </li>
            </ul>
        </div>
        <div class="following">
            <ul class="acc">
                <li>FRIENDS</li>
                <li>
                    <span>Followers</span>
                    <span>0</span>
                </li>
                <li>
                    <span>Following</span>
                    <span>0</span>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style  scoped>
.accounts ul li {
    display: flex;
    align-content: center;
    justify-content: space-between;
}
ul.acc li svg {
    border-radius: 50px;
    background-color: red;
    color: var(--white);
    text-align: center;
    padding: 3px 3px;
}

.following ul.acc li {
    display: flex;
    justify-content: space-between;
}
ul.acc li svg.active {
    background-color: #00D17D;
}

.metadata ul li:first-child{
    color: #443688;
    margin-bottom: 10px;
    font-size: 11px;
    background-color: #F7F7F7;
    font-weight: 600;
    padding: 6px 10px;
}

.metadata ul li {padding: 6px 10px;color: #363636;}
.metadata ul {
    border-radius: 5px;
    list-style: none;
    font-size: 12px;
    margin-bottom: 14px;
    padding: 0;
    border: 1px solid #70707066;
}

</style>