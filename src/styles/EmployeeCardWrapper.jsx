import { Paper, styled } from "@mui/material";

export const EmployeeCardWrapper = styled(Paper)`
padding: 20px;
border-radius: 20px;
box-shadow: 0 0 15px rgba(0,0,0,.2);
  figure {
    height: 300px;
    a{
        display: block;
        height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px 20px 0 0 ;
    }
  }
  .employee_content{
    padding: 20px 0 0 0;
    li{
        width: auto;
        font-weight: 600;
        span,a{
            display: inline-block;
            margin-left: 5px;
            font-size: 14px;
            color: ${({ theme }) => theme.palette.common.black}
        }
        a{
            &:hover{
                color: ${({ theme }) => theme.palette.primary.light};
            }
        }
    }
  }
`;
