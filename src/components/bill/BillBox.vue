<template>
    <div class="form-box">
        <div class="bill-title">
            <slot name="title"></slot>
        </div>
        <div class="bill-top">
            <slot name="top"></slot>
        </div>

        <div class="bill-table">
            <!-- <table class="table">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table> -->
            <TableBox>
                <slot name="body"></slot>
            </TableBox>

            <!-- <div class="t_tips"></div> -->
            <slot></slot>
        </div>
        <div class="table-bot">
            <slot name="bot"></slot>
        </div>
    </div>
</template>
<script setup>
import TableBox from './TableBox.vue';

</script>
<style lang="scss" scoped>
</style>
<style lang="scss">
.form-box {
    input:not([type="radio"],[type="checkbox"]),
    textarea {
        width: 100%;
        // text-align: center;
        border: 0;
        outline: 0;
        line-height: 1.2;
        font-size: 16px;
        font-weight: bold;
        color: #333;
        padding: 2px;
        border-radius: 0;
        // margin: 0 2px;
        &:focus {
            border-right-width: 0;
            box-shadow: none;
        }
    }
    textarea {
        padding: 2px 5px;
        text-indent: 2em;
        resize: none;
    }
}

.form-box {
    --bfont: "仿宋";
    font-family: var(--bfont);
    font-size: 18px;
    color: #000;
    font-weight: bold;
    padding: 0 1px;
    .bill-title {
        font-size: 24px;
        text-align: center;
        padding: 5px;
        margin-bottom: 10px;
    }
    .bill-top {
        display: flex;
        justify-content: space-between;
        text-align: center;
        margin-bottom: 2px;
        input {
            width: 100%;
            text-align: center;
            border: 0;
            outline: 0;
            border-bottom: 1px solid #555;
            line-height: 1.2;
        }
        .year {
            display: inline-block;
            width: 60px;
        }
        .month,
        .date {
            display: inline-block;
            width: 40px;
        }
        .haox {
            display: inline-block;
            width: 120px;
        }
    }
    .bill-table {

    }

        table {
            width: 100%;
            thead{
                // th {
                //     width: 4%;
                // }
            }
            td,th {
                border: 1px solid #888;
                padding: 5px;
            }
        }
    .writ_lr {
        writing-mode: vertical-lr;
        width: 100%;
        display: flex;
        align-items: center;
        letter-spacing: 2px;
        max-height: max-content;
    }
    i.red {
        color: #f00;
        font-weight: normal;
        margin-right: 2px;
    }
    .ant-calendar-picker{
        width:100%;
    }
    .ant-radio-group{
       color: inherit; 
    }
    .ant-radio-wrapper,.ant-checkbox-wrapper{
        font-size:16px;
        white-space: break-spaces;
        color: inherit;
    }
}

.pos {
    position: relative;
}
</style>